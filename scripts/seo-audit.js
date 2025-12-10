#!/usr/bin/env node

/**
 * Comprehensive SEO Audit Script
 * Analyzes all SEO-related parameters and generates a detailed report
 */

const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');
const { URL } = require('url');

class SEOAuditor {
  constructor(baseUrl = 'https://fastsubmit.hostspica.com') {
    this.baseUrl = baseUrl;
    this.results = {
      score: 0,
      maxScore: 0,
      categories: {}
    };
    this.srcPath = path.join(process.cwd(), 'src');
    this.publicPath = path.join(process.cwd(), 'public');
  }

  // Utility function to make HTTP requests
  async fetchUrl(url) {
    return new Promise((resolve, reject) => {
      const client = url.startsWith('https') ? https : http;
      const request = client.get(url, (response) => {
        let data = '';
        response.on('data', chunk => data += chunk);
        response.on('end', () => resolve({
          statusCode: response.statusCode,
          headers: response.headers,
          body: data
        }));
      });
      request.on('error', reject);
      request.setTimeout(10000, () => {
        request.destroy();
        reject(new Error('Request timeout'));
      });
    });
  }

  // Check if file exists
  fileExists(filePath) {
    try {
      return fs.existsSync(filePath);
    } catch {
      return false;
    }
  }

  // Read file content
  readFile(filePath) {
    try {
      return fs.readFileSync(filePath, 'utf8');
    } catch {
      return null;
    }
  }

  // Find files recursively
  findFiles(dir, extension, results = []) {
    if (!fs.existsSync(dir)) return results;
    
    const files = fs.readdirSync(dir);
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
        this.findFiles(filePath, extension, results);
      } else if (file.endsWith(extension)) {
        results.push(filePath);
      }
    }
    return results;
  }

  // Add score to category
  addScore(category, subcategory, score, maxScore, details) {
    if (!this.results.categories[category]) {
      this.results.categories[category] = {
        score: 0,
        maxScore: 0,
        subcategories: {}
      };
    }

    this.results.categories[category].subcategories[subcategory] = {
      score,
      maxScore,
      details,
      percentage: Math.round((score / maxScore) * 100)
    };

    this.results.categories[category].score += score;
    this.results.categories[category].maxScore += maxScore;
    this.results.score += score;
    this.results.maxScore += maxScore;
  }

  // 1. Technical SEO Audit
  async auditTechnicalSEO() {
    console.log('🔧 Auditing Technical SEO...');
    
    // Check robots.txt
    const robotsPath = path.join(this.publicPath, 'robots.txt');
    const robotsExists = this.fileExists(robotsPath);
    const robotsContent = robotsExists ? this.readFile(robotsPath) : '';
    
    let robotsScore = 0;
    const robotsDetails = [];
    
    if (robotsExists) {
      robotsScore += 3;
      robotsDetails.push('✅ robots.txt file exists');
      
      if (robotsContent.includes('Sitemap:')) {
        robotsScore += 2;
        robotsDetails.push('✅ Sitemap reference found');
      } else {
        robotsDetails.push('❌ Missing sitemap reference');
      }
      
      if (robotsContent.includes('User-agent: *')) {
        robotsScore += 2;
        robotsDetails.push('✅ User-agent directive found');
      } else {
        robotsDetails.push('❌ Missing user-agent directive');
      }
      
      if (robotsContent.includes('Disallow: /api/') || robotsContent.includes('Disallow: /dashboard/')) {
        robotsScore += 2;
        robotsDetails.push('✅ Private paths properly disallowed');
      } else {
        robotsDetails.push('⚠️ Consider disallowing private paths');
      }
      
      if (robotsContent.includes('Crawl-delay:')) {
        robotsScore += 1;
        robotsDetails.push('✅ Crawl-delay specified');
      }
    } else {
      robotsDetails.push('❌ robots.txt file missing');
    }
    
    this.addScore('Technical SEO', 'Robots.txt', robotsScore, 10, robotsDetails);

    // Check sitemap
    const sitemapPath = path.join(this.srcPath, 'app', 'sitemap.ts');
    const sitemapExists = this.fileExists(sitemapPath);
    const sitemapContent = sitemapExists ? this.readFile(sitemapPath) : '';
    
    let sitemapScore = 0;
    const sitemapDetails = [];
    
    if (sitemapExists) {
      sitemapScore += 5;
      sitemapDetails.push('✅ Sitemap configuration exists');
      
      const urlCount = (sitemapContent.match(/url:/g) || []).length;
      if (urlCount > 50) {
        sitemapScore += 3;
        sitemapDetails.push(`✅ Comprehensive sitemap (${urlCount}+ URLs)`);
      } else if (urlCount > 20) {
        sitemapScore += 2;
        sitemapDetails.push(`✅ Good sitemap coverage (${urlCount} URLs)`);
      } else {
        sitemapScore += 1;
        sitemapDetails.push(`⚠️ Limited sitemap coverage (${urlCount} URLs)`);
      }
      
      if (sitemapContent.includes('priority:')) {
        sitemapScore += 1;
        sitemapDetails.push('✅ URL priorities set');
      }
      
      if (sitemapContent.includes('changeFrequency:')) {
        sitemapScore += 1;
        sitemapDetails.push('✅ Change frequencies set');
      }
    } else {
      sitemapDetails.push('❌ Sitemap configuration missing');
    }
    
    this.addScore('Technical SEO', 'Sitemap', sitemapScore, 10, sitemapDetails);

    // Check Next.js configuration
    const nextConfigPath = path.join(process.cwd(), 'next.config.js');
    const nextConfigExists = this.fileExists(nextConfigPath);
    const nextConfigContent = nextConfigExists ? this.readFile(nextConfigPath) : '';
    
    let nextConfigScore = 0;
    const nextConfigDetails = [];
    
    if (nextConfigExists) {
      nextConfigScore += 2;
      nextConfigDetails.push('✅ Next.js config exists');
      
      if (nextConfigContent.includes('compress: true')) {
        nextConfigScore += 2;
        nextConfigDetails.push('✅ Compression enabled');
      } else {
        nextConfigDetails.push('⚠️ Consider enabling compression');
      }
      
      if (nextConfigContent.includes('headers()')) {
        nextConfigScore += 2;
        nextConfigDetails.push('✅ Custom headers configured');
      } else {
        nextConfigDetails.push('⚠️ Consider adding security headers');
      }
      
      if (nextConfigContent.includes('redirects()')) {
        nextConfigScore += 2;
        nextConfigDetails.push('✅ Redirects configured');
      }
      
      if (nextConfigContent.includes('images:')) {
        nextConfigScore += 2;
        nextConfigDetails.push('✅ Image optimization configured');
      } else {
        nextConfigDetails.push('⚠️ Consider configuring image optimization');
      }
    } else {
      nextConfigDetails.push('❌ Next.js config missing');
    }
    
    this.addScore('Technical SEO', 'Next.js Config', nextConfigScore, 10, nextConfigDetails);

    // Check for HTTPS and security
    try {
      const response = await this.fetchUrl(this.baseUrl);
      let securityScore = 0;
      const securityDetails = [];
      
      if (response.statusCode === 200) {
        securityScore += 3;
        securityDetails.push('✅ Website accessible');
      }
      
      if (this.baseUrl.startsWith('https://')) {
        securityScore += 3;
        securityDetails.push('✅ HTTPS enabled');
      } else {
        securityDetails.push('❌ HTTPS not enabled');
      }
      
      const headers = response.headers;
      if (headers['strict-transport-security']) {
        securityScore += 2;
        securityDetails.push('✅ HSTS header present');
      } else {
        securityDetails.push('⚠️ Consider adding HSTS header');
      }
      
      if (headers['x-frame-options']) {
        securityScore += 1;
        securityDetails.push('✅ X-Frame-Options header present');
      }
      
      if (headers['x-content-type-options']) {
        securityScore += 1;
        securityDetails.push('✅ X-Content-Type-Options header present');
      }
      
      this.addScore('Technical SEO', 'Security & HTTPS', securityScore, 10, securityDetails);
    } catch (error) {
      this.addScore('Technical SEO', 'Security & HTTPS', 0, 10, [`❌ Unable to check website: ${error.message}`]);
    }
  }

  // 2. On-Page SEO Audit
  async auditOnPageSEO() {
    console.log('📄 Auditing On-Page SEO...');
    
    // Check layout.tsx for global meta tags
    const layoutPath = path.join(this.srcPath, 'app', 'layout.tsx');
    const layoutContent = this.readFile(layoutPath);
    
    let metaScore = 0;
    const metaDetails = [];
    
    if (layoutContent) {
      if (layoutContent.includes('export const metadata')) {
        metaScore += 3;
        metaDetails.push('✅ Global metadata configuration found');
        
        if (layoutContent.includes('title:')) {
          metaScore += 2;
          metaDetails.push('✅ Title configuration present');
        }
        
        if (layoutContent.includes('description:')) {
          metaScore += 2;
          metaDetails.push('✅ Description configuration present');
        }
        
        if (layoutContent.includes('keywords:')) {
          metaScore += 1;
          metaDetails.push('✅ Keywords configuration present');
        }
        
        if (layoutContent.includes('openGraph:')) {
          metaScore += 2;
          metaDetails.push('✅ Open Graph configuration present');
        } else {
          metaDetails.push('⚠️ Consider adding Open Graph tags');
        }
        
        if (layoutContent.includes('twitter:')) {
          metaScore += 1;
          metaDetails.push('✅ Twitter Card configuration present');
        } else {
          metaDetails.push('⚠️ Consider adding Twitter Card tags');
        }
        
        if (layoutContent.includes('robots:')) {
          metaScore += 1;
          metaDetails.push('✅ Robots meta configuration present');
        }
        
        if (layoutContent.includes('verification:')) {
          metaScore += 1;
          metaDetails.push('✅ Search engine verification present');
        }
      } else {
        metaDetails.push('❌ Global metadata configuration missing');
      }
    } else {
      metaDetails.push('❌ Layout file not found');
    }
    
    this.addScore('On-Page SEO', 'Global Meta Tags', metaScore, 13, metaDetails);

    // Check individual pages for meta tags
    const pageFiles = this.findFiles(path.join(this.srcPath, 'app'), 'page.tsx');
    let pageMetaScore = 0;
    const pageMetaDetails = [];
    let pagesWithMeta = 0;
    
    for (const pageFile of pageFiles.slice(0, 10)) { // Check first 10 pages
      const content = this.readFile(pageFile);
      const pageName = path.relative(this.srcPath, pageFile);
      
      if (content && content.includes('export const metadata')) {
        pagesWithMeta++;
        pageMetaDetails.push(`✅ ${pageName} has metadata`);
      } else if (content && content.includes('generateMetadata')) {
        pagesWithMeta++;
        pageMetaDetails.push(`✅ ${pageName} has dynamic metadata`);
      } else {
        pageMetaDetails.push(`⚠️ ${pageName} missing metadata`);
      }
    }
    
    pageMetaScore = Math.round((pagesWithMeta / Math.min(pageFiles.length, 10)) * 10);
    pageMetaDetails.unshift(`📊 ${pagesWithMeta}/${Math.min(pageFiles.length, 10)} pages have metadata`);
    
    this.addScore('On-Page SEO', 'Page-Level Meta Tags', pageMetaScore, 10, pageMetaDetails);

    // Check for structured data
    let structuredDataScore = 0;
    const structuredDataDetails = [];
    let pagesWithSchema = 0;
    
    for (const pageFile of pageFiles.slice(0, 10)) {
      const content = this.readFile(pageFile);
      const pageName = path.relative(this.srcPath, pageFile);
      
      if (content && (content.includes('application/ld+json') || content.includes('@context'))) {
        pagesWithSchema++;
        structuredDataDetails.push(`✅ ${pageName} has structured data`);
      }
    }
    
    structuredDataScore = Math.round((pagesWithSchema / Math.min(pageFiles.length, 10)) * 10);
    structuredDataDetails.unshift(`📊 ${pagesWithSchema}/${Math.min(pageFiles.length, 10)} pages have structured data`);
    
    this.addScore('On-Page SEO', 'Structured Data', structuredDataScore, 10, structuredDataDetails);

    // Check for heading structure
    let headingScore = 0;
    const headingDetails = [];
    let pagesWithH1 = 0;
    
    for (const pageFile of pageFiles.slice(0, 10)) {
      const content = this.readFile(pageFile);
      const pageName = path.relative(this.srcPath, pageFile);
      
      if (content) {
        const h1Count = (content.match(/<h1|className.*text-[3-6]xl.*font-bold/g) || []).length;
        if (h1Count > 0) {
          pagesWithH1++;
          headingDetails.push(`✅ ${pageName} has H1 heading`);
        } else {
          headingDetails.push(`⚠️ ${pageName} missing H1 heading`);
        }
      }
    }
    
    headingScore = Math.round((pagesWithH1 / Math.min(pageFiles.length, 10)) * 10);
    headingDetails.unshift(`📊 ${pagesWithH1}/${Math.min(pageFiles.length, 10)} pages have H1 headings`);
    
    this.addScore('On-Page SEO', 'Heading Structure', headingScore, 10, headingDetails);
  }

  // 3. Content SEO Audit
  async auditContentSEO() {
    console.log('📝 Auditing Content SEO...');
    
    // Check blog content
    const blogPath = path.join(this.srcPath, 'app', 'blog');
    const blogExists = fs.existsSync(blogPath);
    
    let contentScore = 0;
    const contentDetails = [];
    
    if (blogExists) {
      const blogFiles = this.findFiles(blogPath, '.tsx');
      contentScore += 3;
      contentDetails.push(`✅ Blog section exists with ${blogFiles.length} files`);
      
      // Check for blog post pages
      const blogPostPath = path.join(blogPath, '[slug]', 'page.tsx');
      if (this.fileExists(blogPostPath)) {
        contentScore += 3;
        contentDetails.push('✅ Dynamic blog post pages configured');
      }
      
      // Check blog index page
      const blogIndexPath = path.join(blogPath, 'page.tsx');
      const blogIndexContent = this.readFile(blogIndexPath);
      if (blogIndexContent) {
        contentScore += 2;
        contentDetails.push('✅ Blog index page exists');
        
        if (blogIndexContent.includes('blogPosts') || blogIndexContent.includes('posts')) {
          contentScore += 2;
          contentDetails.push('✅ Blog posts data structure found');
        }
      }
    } else {
      contentDetails.push('⚠️ No blog section found');
    }
    
    this.addScore('Content SEO', 'Blog Content', contentScore, 10, contentDetails);

    // Check for landing pages
    const landingPages = [
      'form-builder/page.tsx',
      'google-forms-alternative/page.tsx',
      'templates/page.tsx'
    ];
    
    let landingScore = 0;
    const landingDetails = [];
    
    for (const page of landingPages) {
      const pagePath = path.join(this.srcPath, 'app', page);
      if (this.fileExists(pagePath)) {
        landingScore += 3;
        landingDetails.push(`✅ ${page.replace('/page.tsx', '')} landing page exists`);
        
        const content = this.readFile(pagePath);
        if (content && content.length > 5000) {
          landingScore += 1;
          landingDetails.push(`✅ ${page.replace('/page.tsx', '')} has substantial content`);
        }
      } else {
        landingDetails.push(`❌ ${page.replace('/page.tsx', '')} landing page missing`);
      }
    }
    
    this.addScore('Content SEO', 'Landing Pages', landingScore, 12, landingDetails);

    // Check for use case pages
    const useCasePath = path.join(this.srcPath, 'app', 'use-cases');
    let useCaseScore = 0;
    const useCaseDetails = [];
    
    if (fs.existsSync(useCasePath)) {
      const useCaseFiles = this.findFiles(useCasePath, 'page.tsx');
      useCaseScore = Math.min(useCaseFiles.length * 2, 10);
      useCaseDetails.push(`✅ ${useCaseFiles.length} use case pages found`);
      
      for (const file of useCaseFiles) {
        const fileName = path.basename(path.dirname(file));
        useCaseDetails.push(`✅ Use case: ${fileName}`);
      }
    } else {
      useCaseDetails.push('⚠️ No use case pages found');
    }
    
    this.addScore('Content SEO', 'Use Case Pages', useCaseScore, 10, useCaseDetails);
  }

  // 4. Internal Linking Audit
  async auditInternalLinking() {
    console.log('🔗 Auditing Internal Linking...');
    
    // Check navigation components
    const navPath = path.join(this.srcPath, 'components', 'Navbar.tsx');
    const footerPath = path.join(this.srcPath, 'components', 'Footer.tsx');
    
    let navScore = 0;
    const navDetails = [];
    
    const navContent = this.readFile(navPath);
    if (navContent) {
      navScore += 3;
      navDetails.push('✅ Navigation component exists');
      
      const linkCount = (navContent.match(/href="/g) || []).length;
      if (linkCount > 5) {
        navScore += 3;
        navDetails.push(`✅ Navigation has ${linkCount} links`);
      } else {
        navScore += 1;
        navDetails.push(`⚠️ Navigation has only ${linkCount} links`);
      }
      
      if (navContent.includes('dropdown') || navContent.includes('menu')) {
        navScore += 2;
        navDetails.push('✅ Dropdown/menu navigation found');
      }
    } else {
      navDetails.push('❌ Navigation component missing');
    }
    
    const footerContent = this.readFile(footerPath);
    if (footerContent) {
      navScore += 2;
      navDetails.push('✅ Footer component exists');
      
      const footerLinkCount = (footerContent.match(/href="/g) || []).length;
      if (footerLinkCount > 10) {
        navScore += 2;
        navDetails.push(`✅ Footer has ${footerLinkCount} links`);
      } else {
        navScore += 1;
        navDetails.push(`⚠️ Footer has only ${footerLinkCount} links`);
      }
    } else {
      navDetails.push('❌ Footer component missing');
    }
    
    this.addScore('Internal Linking', 'Navigation Structure', navScore, 12, navDetails);

    // Check for breadcrumbs
    const breadcrumbPath = path.join(this.srcPath, 'components', 'Breadcrumbs.tsx');
    let breadcrumbScore = 0;
    const breadcrumbDetails = [];
    
    if (this.fileExists(breadcrumbPath)) {
      breadcrumbScore += 5;
      breadcrumbDetails.push('✅ Breadcrumb component exists');
      
      const breadcrumbContent = this.readFile(breadcrumbPath);
      if (breadcrumbContent && breadcrumbContent.includes('BreadcrumbList')) {
        breadcrumbScore += 3;
        breadcrumbDetails.push('✅ Structured data for breadcrumbs');
      }
      
      if (breadcrumbContent && breadcrumbContent.includes('generateBreadcrumbs')) {
        breadcrumbScore += 2;
        breadcrumbDetails.push('✅ Dynamic breadcrumb generation');
      }
    } else {
      breadcrumbDetails.push('❌ Breadcrumb component missing');
    }
    
    this.addScore('Internal Linking', 'Breadcrumbs', breadcrumbScore, 10, breadcrumbDetails);

    // Check for related content
    const relatedPath = path.join(this.srcPath, 'components', 'RelatedPosts.tsx');
    let relatedScore = 0;
    const relatedDetails = [];
    
    if (this.fileExists(relatedPath)) {
      relatedScore += 5;
      relatedDetails.push('✅ Related posts component exists');
      
      const relatedContent = this.readFile(relatedPath);
      if (relatedContent && relatedContent.includes('relevanceScore')) {
        relatedScore += 3;
        relatedDetails.push('✅ Smart related content algorithm');
      }
      
      if (relatedContent && relatedContent.includes('tags')) {
        relatedScore += 2;
        relatedDetails.push('✅ Tag-based content relationships');
      }
    } else {
      relatedDetails.push('⚠️ Related posts component missing');
    }
    
    this.addScore('Internal Linking', 'Related Content', relatedScore, 10, relatedDetails);
  }

  // 5. Performance Audit
  async auditPerformance() {
    console.log('⚡ Auditing Performance...');
    
    // Check for Next.js optimizations
    const packagePath = path.join(process.cwd(), 'package.json');
    const packageContent = this.readFile(packagePath);
    
    let perfScore = 0;
    const perfDetails = [];
    
    if (packageContent) {
      const packageJson = JSON.parse(packageContent);
      
      if (packageJson.dependencies && packageJson.dependencies.next) {
        perfScore += 2;
        perfDetails.push(`✅ Next.js ${packageJson.dependencies.next} detected`);
        
        const version = packageJson.dependencies.next.replace(/[^\d.]/g, '');
        if (parseFloat(version) >= 14) {
          perfScore += 2;
          perfDetails.push('✅ Modern Next.js version (14+)');
        }
      }
      
      if (packageJson.dependencies && packageJson.dependencies['@next/font']) {
        perfScore += 1;
        perfDetails.push('✅ Next.js font optimization');
      }
    }
    
    // Check for image optimization
    const nextConfigPath = path.join(process.cwd(), 'next.config.js');
    const nextConfigContent = this.readFile(nextConfigPath);
    
    if (nextConfigContent) {
      if (nextConfigContent.includes('images:')) {
        perfScore += 2;
        perfDetails.push('✅ Image optimization configured');
        
        if (nextConfigContent.includes('formats:')) {
          perfScore += 1;
          perfDetails.push('✅ Modern image formats enabled');
        }
        
        if (nextConfigContent.includes('deviceSizes:')) {
          perfScore += 1;
          perfDetails.push('✅ Responsive image sizes configured');
        }
      }
      
      if (nextConfigContent.includes('compress: true')) {
        perfScore += 1;
        perfDetails.push('✅ Compression enabled');
      }
      
      if (nextConfigContent.includes('optimizePackageImports')) {
        perfScore += 1;
        perfDetails.push('✅ Package import optimization');
      }
    }
    
    this.addScore('Performance', 'Next.js Optimizations', perfScore, 10, perfDetails);

    // Check for lazy loading and code splitting
    const pageFiles = this.findFiles(path.join(this.srcPath, 'app'), 'page.tsx');
    let codeScore = 0;
    const codeDetails = [];
    let dynamicImports = 0;
    
    for (const pageFile of pageFiles.slice(0, 5)) {
      const content = this.readFile(pageFile);
      if (content && content.includes('dynamic(')) {
        dynamicImports++;
      }
    }
    
    if (dynamicImports > 0) {
      codeScore += 5;
      codeDetails.push(`✅ ${dynamicImports} pages use dynamic imports`);
    } else {
      codeDetails.push('⚠️ No dynamic imports found');
    }
    
    // Check for loading states
    let loadingStates = 0;
    for (const pageFile of pageFiles.slice(0, 5)) {
      const content = this.readFile(pageFile);
      if (content && (content.includes('loading') || content.includes('Suspense'))) {
        loadingStates++;
      }
    }
    
    if (loadingStates > 0) {
      codeScore += 3;
      codeDetails.push(`✅ ${loadingStates} pages have loading states`);
    }
    
    // Check for error boundaries
    const errorBoundaryPath = path.join(this.srcPath, 'app', 'error.tsx');
    if (this.fileExists(errorBoundaryPath)) {
      codeScore += 2;
      codeDetails.push('✅ Error boundary configured');
    } else {
      codeDetails.push('⚠️ Consider adding error boundary');
    }
    
    this.addScore('Performance', 'Code Splitting & Loading', codeScore, 10, codeDetails);
  }

  // 6. Mobile & Accessibility Audit
  async auditMobileAccessibility() {
    console.log('📱 Auditing Mobile & Accessibility...');
    
    // Check viewport meta tag
    const layoutPath = path.join(this.srcPath, 'app', 'layout.tsx');
    const layoutContent = this.readFile(layoutPath);
    
    let mobileScore = 0;
    const mobileDetails = [];
    
    if (layoutContent) {
      if (layoutContent.includes('viewport')) {
        mobileScore += 3;
        mobileDetails.push('✅ Viewport meta tag configured');
      } else {
        mobileDetails.push('❌ Viewport meta tag missing');
      }
      
      // Check for responsive design indicators
      const pageFiles = this.findFiles(path.join(this.srcPath, 'app'), 'page.tsx');
      let responsivePages = 0;
      
      for (const pageFile of pageFiles.slice(0, 5)) {
        const content = this.readFile(pageFile);
        if (content && (content.includes('md:') || content.includes('lg:') || content.includes('sm:'))) {
          responsivePages++;
        }
      }
      
      if (responsivePages > 0) {
        mobileScore += 4;
        mobileDetails.push(`✅ ${responsivePages} pages use responsive design`);
      } else {
        mobileDetails.push('⚠️ No responsive design classes found');
      }
      
      // Check for touch-friendly elements
      let touchFriendly = 0;
      for (const pageFile of pageFiles.slice(0, 5)) {
        const content = this.readFile(pageFile);
        if (content && (content.includes('touch-') || content.includes('py-3') || content.includes('py-4'))) {
          touchFriendly++;
        }
      }
      
      if (touchFriendly > 0) {
        mobileScore += 3;
        mobileDetails.push(`✅ ${touchFriendly} pages have touch-friendly elements`);
      }
    }
    
    this.addScore('Mobile & Accessibility', 'Mobile Optimization', mobileScore, 10, mobileDetails);

    // Check for accessibility features
    let a11yScore = 0;
    const a11yDetails = [];
    
    const pageFiles = this.findFiles(path.join(this.srcPath, 'app'), 'page.tsx');
    let altTexts = 0;
    let ariaLabels = 0;
    let semanticElements = 0;
    
    for (const pageFile of pageFiles.slice(0, 5)) {
      const content = this.readFile(pageFile);
      if (content) {
        if (content.includes('alt=')) altTexts++;
        if (content.includes('aria-')) ariaLabels++;
        if (content.includes('<nav>') || content.includes('<main>') || content.includes('<section>')) {
          semanticElements++;
        }
      }
    }
    
    if (altTexts > 0) {
      a11yScore += 3;
      a11yDetails.push(`✅ ${altTexts} pages have alt text`);
    } else {
      a11yDetails.push('⚠️ No alt text found');
    }
    
    if (ariaLabels > 0) {
      a11yScore += 3;
      a11yDetails.push(`✅ ${ariaLabels} pages use ARIA labels`);
    } else {
      a11yDetails.push('⚠️ No ARIA labels found');
    }
    
    if (semanticElements > 0) {
      a11yScore += 4;
      a11yDetails.push(`✅ ${semanticElements} pages use semantic HTML`);
    } else {
      a11yDetails.push('⚠️ No semantic HTML elements found');
    }
    
    this.addScore('Mobile & Accessibility', 'Accessibility Features', a11yScore, 10, a11yDetails);
  }

  // 7. URL Structure & Redirects Audit
  async auditURLStructure() {
    console.log('🔗 Auditing URL Structure...');
    
    // Check URL structure from sitemap
    const sitemapPath = path.join(this.srcPath, 'app', 'sitemap.ts');
    const sitemapContent = this.readFile(sitemapPath);
    
    let urlScore = 0;
    const urlDetails = [];
    
    if (sitemapContent) {
      // Check for clean URLs
      const urls = sitemapContent.match(/['"`]\/[^'"`]*['"`]/g) || [];
      const cleanUrls = urls.filter(url => !url.includes('?') && !url.includes('#'));
      
      if (cleanUrls.length > 0) {
        urlScore += 3;
        urlDetails.push(`✅ ${cleanUrls.length} clean URLs found`);
      }
      
      // Check for descriptive URLs
      const descriptiveUrls = urls.filter(url => 
        url.includes('form') || url.includes('blog') || url.includes('template') || url.includes('guide')
      );
      
      if (descriptiveUrls.length > 0) {
        urlScore += 3;
        urlDetails.push(`✅ ${descriptiveUrls.length} descriptive URLs`);
      }
      
      // Check for proper hierarchy
      const hierarchicalUrls = urls.filter(url => url.split('/').length > 2);
      if (hierarchicalUrls.length > 0) {
        urlScore += 2;
        urlDetails.push(`✅ ${hierarchicalUrls.length} hierarchical URLs`);
      }
    }
    
    // Check for redirects configuration
    const nextConfigPath = path.join(process.cwd(), 'next.config.js');
    const nextConfigContent = this.readFile(nextConfigPath);
    
    if (nextConfigContent && nextConfigContent.includes('redirects()')) {
      urlScore += 2;
      urlDetails.push('✅ Redirects configured');
      
      const redirectCount = (nextConfigContent.match(/source:/g) || []).length;
      if (redirectCount > 0) {
        urlDetails.push(`✅ ${redirectCount} redirects defined`);
      }
    } else {
      urlDetails.push('⚠️ No redirects configured');
    }
    
    this.addScore('URL Structure', 'URL Quality & Redirects', urlScore, 10, urlDetails);
  }

  // Generate comprehensive report
  generateReport() {
    const timestamp = new Date().toISOString().split('T')[0];
    const overallScore = Math.round((this.results.score / this.results.maxScore) * 100);
    
    let report = `# SEO Audit Report - ${timestamp}\n\n`;
    report += `**Website:** ${this.baseUrl}\n`;
    report += `**Overall SEO Score:** ${overallScore}/100 `;
    
    if (overallScore >= 90) report += '🏆 Excellent\n';
    else if (overallScore >= 80) report += '⭐ Very Good\n';
    else if (overallScore >= 70) report += '✅ Good\n';
    else if (overallScore >= 60) report += '⚠️ Needs Improvement\n';
    else report += '❌ Poor\n';
    
    report += `**Total Points:** ${this.results.score}/${this.results.maxScore}\n\n`;
    
    report += `## 📊 Category Breakdown\n\n`;
    
    for (const [category, data] of Object.entries(this.results.categories)) {
      const categoryScore = Math.round((data.score / data.maxScore) * 100);
      report += `### ${category} - ${categoryScore}% (${data.score}/${data.maxScore})\n\n`;
      
      for (const [subcategory, subData] of Object.entries(data.subcategories)) {
        report += `#### ${subcategory} - ${subData.percentage}% (${subData.score}/${subData.maxScore})\n\n`;
        
        for (const detail of subData.details) {
          report += `- ${detail}\n`;
        }
        report += '\n';
      }
    }
    
    // Recommendations
    report += `## 🚀 Priority Recommendations\n\n`;
    
    const lowScoreCategories = Object.entries(this.results.categories)
      .filter(([_, data]) => (data.score / data.maxScore) < 0.8)
      .sort((a, b) => (a[1].score / a[1].maxScore) - (b[1].score / b[1].maxScore));
    
    if (lowScoreCategories.length > 0) {
      report += `### High Priority Issues:\n\n`;
      for (const [category, data] of lowScoreCategories.slice(0, 3)) {
        const score = Math.round((data.score / data.maxScore) * 100);
        report += `1. **${category}** (${score}%) - Focus on improving this area first\n`;
      }
      report += '\n';
    }
    
    // Quick wins
    report += `### Quick Wins:\n\n`;
    report += `1. **Add missing meta descriptions** - Easy to implement, high impact\n`;
    report += `2. **Optimize image alt text** - Improves accessibility and SEO\n`;
    report += `3. **Add structured data** - Helps search engines understand content\n`;
    report += `4. **Improve internal linking** - Helps distribute page authority\n`;
    report += `5. **Add breadcrumb navigation** - Improves user experience and SEO\n\n`;
    
    // Technical recommendations
    report += `### Technical Improvements:\n\n`;
    report += `1. **Enable compression** - Improves page load speed\n`;
    report += `2. **Add security headers** - Improves security and trust signals\n`;
    report += `3. **Optimize images** - Use WebP format and responsive images\n`;
    report += `4. **Add error boundaries** - Improves user experience\n`;
    report += `5. **Implement lazy loading** - Improves initial page load\n\n`;
    
    report += `## 📈 Monitoring & Next Steps\n\n`;
    report += `1. **Set up Google Search Console** - Monitor search performance\n`;
    report += `2. **Install Google Analytics** - Track user behavior\n`;
    report += `3. **Monitor Core Web Vitals** - Track performance metrics\n`;
    report += `4. **Regular content audits** - Keep content fresh and relevant\n`;
    report += `5. **Monthly SEO reviews** - Track progress and identify new opportunities\n\n`;
    
    report += `---\n\n`;
    report += `*Report generated by SEO Audit Script v1.0*\n`;
    report += `*Generated on: ${new Date().toLocaleString()}*\n`;
    
    return report;
  }

  // Run complete audit
  async runAudit() {
    console.log('🚀 Starting Comprehensive SEO Audit...\n');
    
    try {
      await this.auditTechnicalSEO();
      await this.auditOnPageSEO();
      await this.auditContentSEO();
      await this.auditInternalLinking();
      await this.auditPerformance();
      await this.auditMobileAccessibility();
      await this.auditURLStructure();
      
      console.log('\n✅ Audit completed successfully!');
      
      const report = this.generateReport();
      const reportPath = path.join(process.cwd(), `seo-audit-report-${new Date().toISOString().split('T')[0]}.md`);
      
      fs.writeFileSync(reportPath, report);
      console.log(`📄 Report saved to: ${reportPath}`);
      
      // Also log summary to console
      const overallScore = Math.round((this.results.score / this.results.maxScore) * 100);
      console.log(`\n🎯 Overall SEO Score: ${overallScore}/100`);
      console.log(`📊 Total Points: ${this.results.score}/${this.results.maxScore}`);
      
      return report;
      
    } catch (error) {
      console.error('❌ Audit failed:', error.message);
      throw error;
    }
  }
}

// CLI interface
if (require.main === module) {
  const args = process.argv.slice(2);
  const baseUrl = args[0] || 'https://fastsubmit.hostspica.com';
  
  console.log('🔍 SEO Audit Script');
  console.log('==================\n');
  
  const auditor = new SEOAuditor(baseUrl);
  auditor.runAudit().catch(error => {
    console.error('Fatal error:', error);
    process.exit(1);
  });
}

module.exports = SEOAuditor;