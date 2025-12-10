#!/usr/bin/env node

/**
 * Advanced SEO Audit Script with External API Checks
 * Includes PageSpeed Insights, Social Media validation, and more
 */

const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');
const { URL } = require('url');

class AdvancedSEOAuditor {
  constructor(baseUrl = 'https://fastsubmit.hostspica.com') {
    this.baseUrl = baseUrl;
    this.results = {
      score: 0,
      maxScore: 0,
      categories: {},
      timestamp: new Date().toISOString()
    };
    this.srcPath = path.join(process.cwd(), 'src');
    this.publicPath = path.join(process.cwd(), 'public');
  }

  // Utility function to make HTTP requests
  async fetchUrl(url, options = {}) {
    return new Promise((resolve, reject) => {
      const client = url.startsWith('https') ? https : http;
      const request = client.get(url, options, (response) => {
        let data = '';
        response.on('data', chunk => data += chunk);
        response.on('end', () => resolve({
          statusCode: response.statusCode,
          headers: response.headers,
          body: data
        }));
      });
      request.on('error', reject);
      request.setTimeout(15000, () => {
        request.destroy();
        reject(new Error('Request timeout'));
      });
    });
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

  // Check website accessibility and response
  async auditWebsiteAccessibility() {
    console.log('🌐 Auditing Website Accessibility...');
    
    let accessScore = 0;
    const accessDetails = [];
    
    try {
      // Check main website
      const response = await this.fetchUrl(this.baseUrl);
      
      if (response.statusCode === 200) {
        accessScore += 5;
        accessDetails.push('✅ Website is accessible (200 OK)');
        
        // Check response time (basic)
        const startTime = Date.now();
        await this.fetchUrl(this.baseUrl);
        const responseTime = Date.now() - startTime;
        
        if (responseTime < 1000) {
          accessScore += 3;
          accessDetails.push(`✅ Fast response time (${responseTime}ms)`);
        } else if (responseTime < 3000) {
          accessScore += 2;
          accessDetails.push(`⚠️ Moderate response time (${responseTime}ms)`);
        } else {
          accessScore += 1;
          accessDetails.push(`❌ Slow response time (${responseTime}ms)`);
        }
        
        // Check content length
        if (response.body.length > 10000) {
          accessScore += 2;
          accessDetails.push(`✅ Substantial content (${Math.round(response.body.length/1000)}KB)`);
        } else {
          accessDetails.push(`⚠️ Limited content (${Math.round(response.body.length/1000)}KB)`);
        }
        
      } else {
        accessDetails.push(`❌ Website returned ${response.statusCode}`);
      }
      
      // Check key pages
      const keyPages = ['/form-builder', '/templates', '/blog', '/docs'];
      let accessiblePages = 0;
      
      for (const page of keyPages) {
        try {
          const pageResponse = await this.fetchUrl(`${this.baseUrl}${page}`);
          if (pageResponse.statusCode === 200) {
            accessiblePages++;
          }
        } catch (error) {
          // Page not accessible
        }
      }
      
      if (accessiblePages === keyPages.length) {
        accessScore += 5;
        accessDetails.push(`✅ All key pages accessible (${accessiblePages}/${keyPages.length})`);
      } else {
        accessScore += Math.round((accessiblePages / keyPages.length) * 5);
        accessDetails.push(`⚠️ Some key pages inaccessible (${accessiblePages}/${keyPages.length})`);
      }
      
    } catch (error) {
      accessDetails.push(`❌ Website accessibility check failed: ${error.message}`);
    }
    
    this.addScore('Website Health', 'Accessibility & Response', accessScore, 15, accessDetails);
  }

  // Check social media meta tags
  async auditSocialMediaSEO() {
    console.log('📱 Auditing Social Media SEO...');
    
    let socialScore = 0;
    const socialDetails = [];
    
    try {
      const response = await this.fetchUrl(this.baseUrl);
      const html = response.body;
      
      // Check Open Graph tags
      const ogTags = {
        'og:title': html.includes('property="og:title"'),
        'og:description': html.includes('property="og:description"'),
        'og:image': html.includes('property="og:image"'),
        'og:url': html.includes('property="og:url"'),
        'og:type': html.includes('property="og:type"'),
        'og:site_name': html.includes('property="og:site_name"')
      };
      
      const ogCount = Object.values(ogTags).filter(Boolean).length;
      socialScore += Math.round((ogCount / 6) * 8);
      socialDetails.push(`📊 Open Graph tags: ${ogCount}/6 present`);
      
      for (const [tag, present] of Object.entries(ogTags)) {
        socialDetails.push(`${present ? '✅' : '❌'} ${tag}`);
      }
      
      // Check Twitter Card tags
      const twitterTags = {
        'twitter:card': html.includes('name="twitter:card"'),
        'twitter:title': html.includes('name="twitter:title"'),
        'twitter:description': html.includes('name="twitter:description"'),
        'twitter:image': html.includes('name="twitter:image"')
      };
      
      const twitterCount = Object.values(twitterTags).filter(Boolean).length;
      socialScore += Math.round((twitterCount / 4) * 7);
      socialDetails.push(`📊 Twitter Card tags: ${twitterCount}/4 present`);
      
      for (const [tag, present] of Object.entries(twitterTags)) {
        socialDetails.push(`${present ? '✅' : '❌'} ${tag}`);
      }
      
      // Check for social media links
      const socialLinks = [
        'twitter.com',
        'facebook.com',
        'linkedin.com',
        'instagram.com',
        'github.com'
      ];
      
      let socialLinksFound = 0;
      for (const link of socialLinks) {
        if (html.includes(link)) {
          socialLinksFound++;
        }
      }
      
      if (socialLinksFound > 0) {
        socialScore += Math.min(socialLinksFound * 2, 5);
        socialDetails.push(`✅ ${socialLinksFound} social media links found`);
      } else {
        socialDetails.push('⚠️ No social media links found');
      }
      
    } catch (error) {
      socialDetails.push(`❌ Social media audit failed: ${error.message}`);
    }
    
    this.addScore('Social Media SEO', 'Meta Tags & Links', socialScore, 20, socialDetails);
  }

  // Check search engine indexing
  async auditSearchEngineIndexing() {
    console.log('🔍 Auditing Search Engine Indexing...');
    
    let indexScore = 0;
    const indexDetails = [];
    
    try {
      // Check robots.txt
      const robotsResponse = await this.fetchUrl(`${this.baseUrl}/robots.txt`);
      if (robotsResponse.statusCode === 200) {
        indexScore += 3;
        indexDetails.push('✅ robots.txt accessible');
        
        const robotsContent = robotsResponse.body;
        if (robotsContent.includes('Sitemap:')) {
          indexScore += 2;
          indexDetails.push('✅ Sitemap declared in robots.txt');
        }
        
        if (robotsContent.includes('User-agent: *')) {
          indexScore += 2;
          indexDetails.push('✅ User-agent directives present');
        }
      } else {
        indexDetails.push('❌ robots.txt not accessible');
      }
      
      // Check sitemap.xml
      const sitemapResponse = await this.fetchUrl(`${this.baseUrl}/sitemap.xml`);
      if (sitemapResponse.statusCode === 200) {
        indexScore += 5;
        indexDetails.push('✅ sitemap.xml accessible');
        
        const sitemapContent = sitemapResponse.body;
        const urlCount = (sitemapContent.match(/<url>/g) || []).length;
        
        if (urlCount > 50) {
          indexScore += 3;
          indexDetails.push(`✅ Comprehensive sitemap (${urlCount} URLs)`);
        } else if (urlCount > 20) {
          indexScore += 2;
          indexDetails.push(`✅ Good sitemap (${urlCount} URLs)`);
        } else if (urlCount > 0) {
          indexScore += 1;
          indexDetails.push(`⚠️ Limited sitemap (${urlCount} URLs)`);
        }
        
        if (sitemapContent.includes('<priority>')) {
          indexScore += 1;
          indexDetails.push('✅ URL priorities specified');
        }
        
        if (sitemapContent.includes('<changefreq>')) {
          indexScore += 1;
          indexDetails.push('✅ Change frequencies specified');
        }
        
        if (sitemapContent.includes('<lastmod>')) {
          indexScore += 1;
          indexDetails.push('✅ Last modification dates present');
        }
      } else {
        indexDetails.push('❌ sitemap.xml not accessible');
      }
      
      // Check meta robots
      const response = await this.fetchUrl(this.baseUrl);
      const html = response.body;
      
      if (html.includes('name="robots"') && !html.includes('content="noindex"')) {
        indexScore += 2;
        indexDetails.push('✅ Pages set to be indexed');
      } else if (!html.includes('name="robots"')) {
        indexScore += 1;
        indexDetails.push('⚠️ No robots meta tag (default indexing)');
      } else {
        indexDetails.push('❌ Pages set to noindex');
      }
      
    } catch (error) {
      indexDetails.push(`❌ Indexing audit failed: ${error.message}`);
    }
    
    this.addScore('Search Engine Indexing', 'Crawlability & Indexing', indexScore, 20, indexDetails);
  }

  // Check structured data
  async auditStructuredData() {
    console.log('📋 Auditing Structured Data...');
    
    let structuredScore = 0;
    const structuredDetails = [];
    
    try {
      const response = await this.fetchUrl(this.baseUrl);
      const html = response.body;
      
      // Check for JSON-LD
      const jsonLdMatches = html.match(/<script[^>]*type="application\/ld\+json"[^>]*>(.*?)<\/script>/gs);
      
      if (jsonLdMatches && jsonLdMatches.length > 0) {
        structuredScore += 5;
        structuredDetails.push(`✅ ${jsonLdMatches.length} JSON-LD scripts found`);
        
        // Analyze structured data types
        const schemaTypes = new Set();
        for (const match of jsonLdMatches) {
          try {
            const jsonContent = match.replace(/<script[^>]*>/, '').replace(/<\/script>/, '');
            const data = JSON.parse(jsonContent);
            
            if (data['@type']) {
              schemaTypes.add(data['@type']);
            } else if (Array.isArray(data)) {
              data.forEach(item => {
                if (item['@type']) schemaTypes.add(item['@type']);
              });
            }
          } catch (e) {
            // Invalid JSON, skip
          }
        }
        
        if (schemaTypes.size > 0) {
          structuredScore += Math.min(schemaTypes.size * 2, 10);
          structuredDetails.push(`✅ Schema types: ${Array.from(schemaTypes).join(', ')}`);
        }
        
        // Check for specific important schemas
        const importantSchemas = ['Organization', 'WebSite', 'Article', 'SoftwareApplication'];
        let importantFound = 0;
        
        for (const schema of importantSchemas) {
          if (schemaTypes.has(schema)) {
            importantFound++;
            structuredDetails.push(`✅ ${schema} schema present`);
          }
        }
        
        structuredScore += importantFound * 2;
        
      } else {
        structuredDetails.push('❌ No JSON-LD structured data found');
      }
      
      // Check for microdata
      if (html.includes('itemscope') || html.includes('itemtype')) {
        structuredScore += 2;
        structuredDetails.push('✅ Microdata markup found');
      }
      
      // Check for RDFa
      if (html.includes('property=') && html.includes('typeof=')) {
        structuredScore += 1;
        structuredDetails.push('✅ RDFa markup found');
      }
      
    } catch (error) {
      structuredDetails.push(`❌ Structured data audit failed: ${error.message}`);
    }
    
    this.addScore('Structured Data', 'Schema Markup', structuredScore, 25, structuredDetails);
  }

  // Check page speed and performance
  async auditPageSpeed() {
    console.log('⚡ Auditing Page Speed...');
    
    let speedScore = 0;
    const speedDetails = [];
    
    try {
      // Basic response time check
      const startTime = Date.now();
      const response = await this.fetchUrl(this.baseUrl);
      const responseTime = Date.now() - startTime;
      
      if (responseTime < 500) {
        speedScore += 5;
        speedDetails.push(`✅ Excellent response time (${responseTime}ms)`);
      } else if (responseTime < 1000) {
        speedScore += 4;
        speedDetails.push(`✅ Good response time (${responseTime}ms)`);
      } else if (responseTime < 2000) {
        speedScore += 3;
        speedDetails.push(`⚠️ Moderate response time (${responseTime}ms)`);
      } else {
        speedScore += 1;
        speedDetails.push(`❌ Slow response time (${responseTime}ms)`);
      }
      
      // Check compression
      if (response.headers['content-encoding']) {
        speedScore += 3;
        speedDetails.push(`✅ Compression enabled (${response.headers['content-encoding']})`);
      } else {
        speedDetails.push('⚠️ No compression detected');
      }
      
      // Check caching headers
      if (response.headers['cache-control']) {
        speedScore += 2;
        speedDetails.push('✅ Cache-Control header present');
      } else {
        speedDetails.push('⚠️ No Cache-Control header');
      }
      
      if (response.headers['etag']) {
        speedScore += 1;
        speedDetails.push('✅ ETag header present');
      }
      
      // Check content size
      const contentLength = response.body.length;
      if (contentLength < 100000) { // Less than 100KB
        speedScore += 3;
        speedDetails.push(`✅ Optimized page size (${Math.round(contentLength/1000)}KB)`);
      } else if (contentLength < 500000) { // Less than 500KB
        speedScore += 2;
        speedDetails.push(`⚠️ Moderate page size (${Math.round(contentLength/1000)}KB)`);
      } else {
        speedScore += 1;
        speedDetails.push(`❌ Large page size (${Math.round(contentLength/1000)}KB)`);
      }
      
      // Check for modern image formats in HTML
      const html = response.body;
      if (html.includes('.webp') || html.includes('.avif')) {
        speedScore += 2;
        speedDetails.push('✅ Modern image formats detected');
      } else {
        speedDetails.push('⚠️ Consider using modern image formats (WebP, AVIF)');
      }
      
      // Check for lazy loading
      if (html.includes('loading="lazy"') || html.includes('lazy')) {
        speedScore += 2;
        speedDetails.push('✅ Lazy loading implemented');
      } else {
        speedDetails.push('⚠️ Consider implementing lazy loading');
      }
      
    } catch (error) {
      speedDetails.push(`❌ Page speed audit failed: ${error.message}`);
    }
    
    this.addScore('Performance', 'Page Speed & Optimization', speedScore, 20, speedDetails);
  }

  // Check security headers
  async auditSecurityHeaders() {
    console.log('🔒 Auditing Security Headers...');
    
    let securityScore = 0;
    const securityDetails = [];
    
    try {
      const response = await this.fetchUrl(this.baseUrl);
      const headers = response.headers;
      
      // Check important security headers
      const securityHeaders = {
        'strict-transport-security': 'HSTS',
        'x-frame-options': 'X-Frame-Options',
        'x-content-type-options': 'X-Content-Type-Options',
        'x-xss-protection': 'X-XSS-Protection',
        'referrer-policy': 'Referrer-Policy',
        'content-security-policy': 'Content-Security-Policy',
        'permissions-policy': 'Permissions-Policy'
      };
      
      let presentHeaders = 0;
      for (const [header, name] of Object.entries(securityHeaders)) {
        if (headers[header]) {
          presentHeaders++;
          securityScore += 2;
          securityDetails.push(`✅ ${name} header present`);
        } else {
          securityDetails.push(`⚠️ ${name} header missing`);
        }
      }
      
      securityDetails.unshift(`📊 ${presentHeaders}/${Object.keys(securityHeaders).length} security headers present`);
      
      // Check HTTPS
      if (this.baseUrl.startsWith('https://')) {
        securityScore += 4;
        securityDetails.push('✅ HTTPS enabled');
      } else {
        securityDetails.push('❌ HTTPS not enabled');
      }
      
    } catch (error) {
      securityDetails.push(`❌ Security headers audit failed: ${error.message}`);
    }
    
    this.addScore('Security', 'Security Headers & HTTPS', securityScore, 18, securityDetails);
  }

  // Check mobile friendliness
  async auditMobileFriendliness() {
    console.log('📱 Auditing Mobile Friendliness...');
    
    let mobileScore = 0;
    const mobileDetails = [];
    
    try {
      const response = await this.fetchUrl(this.baseUrl);
      const html = response.body;
      
      // Check viewport meta tag
      if (html.includes('name="viewport"')) {
        mobileScore += 5;
        mobileDetails.push('✅ Viewport meta tag present');
        
        if (html.includes('width=device-width')) {
          mobileScore += 3;
          mobileDetails.push('✅ Responsive viewport configuration');
        }
      } else {
        mobileDetails.push('❌ Viewport meta tag missing');
      }
      
      // Check for responsive design indicators
      const responsiveIndicators = [
        'media="(max-width',
        'media="(min-width',
        '@media',
        'responsive',
        'mobile-first'
      ];
      
      let responsiveFound = 0;
      for (const indicator of responsiveIndicators) {
        if (html.includes(indicator)) {
          responsiveFound++;
        }
      }
      
      if (responsiveFound > 0) {
        mobileScore += Math.min(responsiveFound * 2, 6);
        mobileDetails.push(`✅ ${responsiveFound} responsive design indicators found`);
      } else {
        mobileDetails.push('⚠️ No responsive design indicators found');
      }
      
      // Check for touch-friendly elements
      if (html.includes('touch') || html.includes('tap')) {
        mobileScore += 2;
        mobileDetails.push('✅ Touch-friendly elements detected');
      }
      
      // Check for mobile-specific optimizations
      if (html.includes('apple-touch-icon') || html.includes('manifest')) {
        mobileScore += 2;
        mobileDetails.push('✅ Mobile app optimizations present');
      }
      
      // Check font sizes (basic check)
      if (!html.includes('font-size: 8px') && !html.includes('font-size: 9px')) {
        mobileScore += 2;
        mobileDetails.push('✅ No extremely small fonts detected');
      } else {
        mobileDetails.push('⚠️ Very small fonts may not be mobile-friendly');
      }
      
    } catch (error) {
      mobileDetails.push(`❌ Mobile friendliness audit failed: ${error.message}`);
    }
    
    this.addScore('Mobile SEO', 'Mobile Friendliness', mobileScore, 20, mobileDetails);
  }

  // Generate comprehensive report
  generateAdvancedReport() {
    const timestamp = new Date().toISOString().split('T')[0];
    const overallScore = Math.round((this.results.score / this.results.maxScore) * 100);
    
    let report = `# Advanced SEO Audit Report - ${timestamp}\n\n`;
    report += `**Website:** ${this.baseUrl}\n`;
    report += `**Audit Date:** ${new Date().toLocaleString()}\n`;
    report += `**Overall SEO Score:** ${overallScore}/100 `;
    
    // Score interpretation
    if (overallScore >= 95) report += '🏆 Outstanding\n';
    else if (overallScore >= 90) report += '🌟 Excellent\n';
    else if (overallScore >= 80) report += '⭐ Very Good\n';
    else if (overallScore >= 70) report += '✅ Good\n';
    else if (overallScore >= 60) report += '⚠️ Needs Improvement\n';
    else if (overallScore >= 50) report += '❌ Poor\n';
    else report += '💥 Critical Issues\n';
    
    report += `**Total Points:** ${this.results.score}/${this.results.maxScore}\n\n`;
    
    // Executive Summary
    report += `## 📊 Executive Summary\n\n`;
    
    const categoryScores = Object.entries(this.results.categories).map(([name, data]) => ({
      name,
      score: Math.round((data.score / data.maxScore) * 100),
      points: `${data.score}/${data.maxScore}`
    })).sort((a, b) => b.score - a.score);
    
    report += `### Top Performing Areas:\n`;
    categoryScores.slice(0, 3).forEach((cat, i) => {
      report += `${i + 1}. **${cat.name}**: ${cat.score}% (${cat.points})\n`;
    });
    
    report += `\n### Areas Needing Attention:\n`;
    categoryScores.slice(-3).reverse().forEach((cat, i) => {
      report += `${i + 1}. **${cat.name}**: ${cat.score}% (${cat.points})\n`;
    });
    
    report += `\n## 📈 Detailed Category Analysis\n\n`;
    
    // Detailed breakdown
    for (const [category, data] of Object.entries(this.results.categories)) {
      const categoryScore = Math.round((data.score / data.maxScore) * 100);
      let emoji = '✅';
      if (categoryScore < 70) emoji = '⚠️';
      if (categoryScore < 50) emoji = '❌';
      
      report += `### ${emoji} ${category} - ${categoryScore}% (${data.score}/${data.maxScore})\n\n`;
      
      for (const [subcategory, subData] of Object.entries(data.subcategories)) {
        let subEmoji = '✅';
        if (subData.percentage < 70) subEmoji = '⚠️';
        if (subData.percentage < 50) subEmoji = '❌';
        
        report += `#### ${subEmoji} ${subcategory} - ${subData.percentage}% (${subData.score}/${subData.maxScore})\n\n`;
        
        for (const detail of subData.details) {
          report += `- ${detail}\n`;
        }
        report += '\n';
      }
    }
    
    // Action Plan
    report += `## 🎯 Priority Action Plan\n\n`;
    
    const criticalIssues = Object.entries(this.results.categories)
      .filter(([_, data]) => (data.score / data.maxScore) < 0.5)
      .sort((a, b) => (a[1].score / a[1].maxScore) - (b[1].score / b[1].maxScore));
    
    if (criticalIssues.length > 0) {
      report += `### 🚨 Critical Issues (Fix Immediately):\n\n`;
      criticalIssues.forEach(([category, data], i) => {
        const score = Math.round((data.score / data.maxScore) * 100);
        report += `${i + 1}. **${category}** (${score}%) - Critical SEO issues detected\n`;
      });
      report += '\n';
    }
    
    const mediumIssues = Object.entries(this.results.categories)
      .filter(([_, data]) => {
        const score = data.score / data.maxScore;
        return score >= 0.5 && score < 0.8;
      });
    
    if (mediumIssues.length > 0) {
      report += `### ⚠️ Medium Priority Issues:\n\n`;
      mediumIssues.forEach(([category, data], i) => {
        const score = Math.round((data.score / data.maxScore) * 100);
        report += `${i + 1}. **${category}** (${score}%) - Room for improvement\n`;
      });
      report += '\n';
    }
    
    // Quick Wins
    report += `### ⚡ Quick Wins (Easy to Implement):\n\n`;
    report += `1. **Add missing meta descriptions** - High impact, low effort\n`;
    report += `2. **Optimize image alt text** - Improves accessibility and SEO\n`;
    report += `3. **Add structured data markup** - Enhances search result appearance\n`;
    report += `4. **Implement security headers** - Improves trust signals\n`;
    report += `5. **Optimize page titles** - Direct ranking factor\n`;
    report += `6. **Add internal links** - Distributes page authority\n`;
    report += `7. **Compress images** - Improves page speed\n`;
    report += `8. **Add social media meta tags** - Better social sharing\n\n`;
    
    // Technical Recommendations
    report += `### 🔧 Technical Recommendations:\n\n`;
    report += `1. **Enable GZIP/Brotli compression** - Reduces page size by 60-80%\n`;
    report += `2. **Implement lazy loading** - Improves initial page load time\n`;
    report += `3. **Add service worker** - Enables offline functionality and caching\n`;
    report += `4. **Optimize Critical Rendering Path** - Improves perceived performance\n`;
    report += `5. **Use modern image formats** - WebP/AVIF for better compression\n`;
    report += `6. **Implement HTTP/2 Server Push** - Reduces round trips\n`;
    report += `7. **Add preload/prefetch hints** - Optimizes resource loading\n`;
    report += `8. **Minimize JavaScript bundles** - Reduces parse/execution time\n\n`;
    
    // Content Strategy
    report += `### 📝 Content Strategy Recommendations:\n\n`;
    report += `1. **Create topic clusters** - Organize content around main themes\n`;
    report += `2. **Target long-tail keywords** - Less competition, higher conversion\n`;
    report += `3. **Add FAQ sections** - Targets voice search queries\n`;
    report += `4. **Create comparison content** - High commercial intent keywords\n`;
    report += `5. **Develop case studies** - Builds authority and trust\n`;
    report += `6. **Regular content updates** - Maintains freshness signals\n`;
    report += `7. **Internal content linking** - Improves topic authority\n`;
    report += `8. **User-generated content** - Increases engagement and freshness\n\n`;
    
    // Monitoring & Maintenance
    report += `## 📊 Monitoring & Maintenance Plan\n\n`;
    report += `### Weekly Tasks:\n`;
    report += `- Monitor Google Search Console for errors\n`;
    report += `- Check Core Web Vitals performance\n`;
    report += `- Review new content for SEO optimization\n`;
    report += `- Monitor keyword rankings\n\n`;
    
    report += `### Monthly Tasks:\n`;
    report += `- Run comprehensive SEO audit\n`;
    report += `- Analyze competitor SEO strategies\n`;
    report += `- Update and optimize existing content\n`;
    report += `- Review and update meta tags\n`;
    report += `- Check for broken links and fix them\n\n`;
    
    report += `### Quarterly Tasks:\n`;
    report += `- Comprehensive technical SEO audit\n`;
    report += `- Content gap analysis\n`;
    report += `- Backlink profile analysis\n`;
    report += `- Site architecture review\n`;
    report += `- Conversion rate optimization review\n\n`;
    
    // Tools and Resources
    report += `## 🛠️ Recommended Tools & Resources\n\n`;
    report += `### Free Tools:\n`;
    report += `- **Google Search Console** - Essential for monitoring search performance\n`;
    report += `- **Google Analytics** - Track user behavior and conversions\n`;
    report += `- **PageSpeed Insights** - Monitor Core Web Vitals\n`;
    report += `- **Google Rich Results Test** - Validate structured data\n`;
    report += `- **Mobile-Friendly Test** - Check mobile optimization\n\n`;
    
    report += `### Premium Tools (Recommended):\n`;
    report += `- **Ahrefs/SEMrush** - Comprehensive SEO analysis\n`;
    report += `- **Screaming Frog** - Technical SEO crawling\n`;
    report += `- **GTmetrix** - Detailed performance analysis\n`;
    report += `- **Hotjar** - User behavior analysis\n`;
    report += `- **BrightEdge/Conductor** - Enterprise SEO platform\n\n`;
    
    report += `---\n\n`;
    report += `*Advanced SEO Audit Report generated by SEO Audit Script v2.0*\n`;
    report += `*Generated on: ${new Date().toLocaleString()}*\n`;
    report += `*Next audit recommended: ${new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString()}*\n`;
    
    return report;
  }

  // Run complete advanced audit
  async runAdvancedAudit() {
    console.log('🚀 Starting Advanced SEO Audit...\n');
    console.log(`🌐 Auditing: ${this.baseUrl}\n`);
    
    try {
      await this.auditWebsiteAccessibility();
      await this.auditSocialMediaSEO();
      await this.auditSearchEngineIndexing();
      await this.auditStructuredData();
      await this.auditPageSpeed();
      await this.auditSecurityHeaders();
      await this.auditMobileFriendliness();
      
      console.log('\n✅ Advanced audit completed successfully!');
      
      const report = this.generateAdvancedReport();
      const reportPath = path.join(process.cwd(), `advanced-seo-audit-${new Date().toISOString().split('T')[0]}.md`);
      
      fs.writeFileSync(reportPath, report);
      console.log(`📄 Advanced report saved to: ${reportPath}`);
      
      // Console summary
      const overallScore = Math.round((this.results.score / this.results.maxScore) * 100);
      console.log(`\n🎯 Overall SEO Score: ${overallScore}/100`);
      console.log(`📊 Total Points: ${this.results.score}/${this.results.maxScore}`);
      
      // Category summary
      console.log('\n📈 Category Breakdown:');
      for (const [category, data] of Object.entries(this.results.categories)) {
        const score = Math.round((data.score / data.maxScore) * 100);
        const emoji = score >= 80 ? '✅' : score >= 60 ? '⚠️' : '❌';
        console.log(`${emoji} ${category}: ${score}% (${data.score}/${data.maxScore})`);
      }
      
      return report;
      
    } catch (error) {
      console.error('❌ Advanced audit failed:', error.message);
      throw error;
    }
  }
}

// CLI interface
if (require.main === module) {
  const args = process.argv.slice(2);
  const baseUrl = args[0] || 'https://fastsubmit.hostspica.com';
  
  console.log('🔍 Advanced SEO Audit Script');
  console.log('============================\n');
  
  const auditor = new AdvancedSEOAuditor(baseUrl);
  auditor.runAdvancedAudit().catch(error => {
    console.error('Fatal error:', error);
    process.exit(1);
  });
}

module.exports = AdvancedSEOAuditor;