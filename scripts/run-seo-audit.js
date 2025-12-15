#!/usr/bin/env node

/**
 * SEO Audit Runner - Combines local and external audits
 * Generates a comprehensive SEO report with actionable insights
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class SEOAuditRunner {
  constructor(baseUrl = 'https://fastsubmit.cloud') {
    this.baseUrl = baseUrl;
    this.timestamp = new Date().toISOString().split('T')[0];
  }

  // Run local file-based audit
  async runLocalAudit() {
    console.log('🔧 Running Local SEO Audit...');
    const SEOAuditor = require('./seo-audit.js');
    const auditor = new SEOAuditor(this.baseUrl);
    return await auditor.runAudit();
  }

  // Run advanced external audit
  async runAdvancedAudit() {
    console.log('🌐 Running Advanced SEO Audit...');
    const AdvancedSEOAuditor = require('./seo-audit-advanced.js');
    const auditor = new AdvancedSEOAuditor(this.baseUrl);
    return await auditor.runAdvancedAudit();
  }

  // Generate combined report
  generateCombinedReport(localReport, advancedReport) {
    const report = `# Complete SEO Audit Report - ${this.timestamp}

**Website:** ${this.baseUrl}  
**Audit Date:** ${new Date().toLocaleString()}  
**Report Type:** Comprehensive (Local + External Analysis)

---

## 📊 Executive Summary

This comprehensive SEO audit combines local code analysis with external website testing to provide a complete picture of your website's SEO health.

### Audit Components:
1. **Local Analysis** - Code structure, meta tags, technical implementation
2. **External Analysis** - Live website testing, performance, accessibility

---

## 🏠 Local SEO Analysis

${localReport.split('# SEO Audit Report')[1] || localReport}

---

## 🌐 External SEO Analysis  

${advancedReport.split('# Advanced SEO Audit Report')[1] || advancedReport}

---

## 🎯 Combined Recommendations

### Immediate Actions (Week 1):
1. Fix any critical technical issues identified in local analysis
2. Address website accessibility problems from external testing
3. Implement missing security headers
4. Optimize page speed issues
5. Add missing structured data markup

### Short-term Goals (Month 1):
1. Complete all meta tag optimizations
2. Implement comprehensive internal linking strategy
3. Optimize all images for performance and SEO
4. Set up proper monitoring tools
5. Create content optimization plan

### Long-term Strategy (3-6 Months):
1. Develop comprehensive content marketing strategy
2. Build high-quality backlink profile
3. Implement advanced technical SEO features
4. Create topic clusters and pillar pages
5. Optimize for Core Web Vitals and user experience

### Monitoring & Maintenance:
1. Set up Google Search Console and Analytics
2. Implement regular SEO audits (monthly)
3. Monitor keyword rankings and traffic
4. Track Core Web Vitals performance
5. Regular content updates and optimization

---

## 📈 Success Metrics to Track

### Technical Metrics:
- Page load speed (< 3 seconds)
- Core Web Vitals scores (all green)
- Mobile usability score (100%)
- Security headers implementation (100%)
- Structured data coverage (80%+ of pages)

### SEO Metrics:
- Organic traffic growth (target: +25% in 6 months)
- Keyword ranking improvements
- Click-through rates from search results
- Page indexation rate (95%+ of important pages)
- Internal link distribution and authority flow

### User Experience Metrics:
- Bounce rate improvement
- Time on page increase
- Conversion rate optimization
- Mobile user engagement
- Accessibility compliance score

---

*Complete SEO Audit Report generated on ${new Date().toLocaleString()}*  
*Next comprehensive audit recommended: ${new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toLocaleDateString()}*
`;

    return report;
  }

  // Run complete audit
  async runCompleteAudit() {
    console.log('🚀 Starting Complete SEO Audit Suite...\n');
    console.log(`🎯 Target Website: ${this.baseUrl}\n`);
    
    try {
      // Run both audits
      const localReport = await this.runLocalAudit();
      console.log('\n' + '='.repeat(50) + '\n');
      const advancedReport = await this.runAdvancedAudit();
      
      // Generate combined report
      const combinedReport = this.generateCombinedReport(localReport, advancedReport);
      const reportPath = path.join(process.cwd(), `complete-seo-audit-${this.timestamp}.md`);
      
      fs.writeFileSync(reportPath, combinedReport);
      
      console.log('\n' + '='.repeat(50));
      console.log('✅ Complete SEO Audit Finished!');
      console.log('='.repeat(50));
      console.log(`📄 Combined report saved to: ${reportPath}`);
      console.log(`📊 Report includes both local and external analysis`);
      console.log(`🎯 Next audit recommended in 30-90 days`);
      
      // Generate quick summary
      console.log('\n📋 Quick Summary:');
      console.log('- Local code analysis completed');
      console.log('- External website testing completed');
      console.log('- Combined recommendations generated');
      console.log('- Action plan with priorities created');
      console.log('- Monitoring strategy outlined');
      
      return combinedReport;
      
    } catch (error) {
      console.error('❌ Complete audit failed:', error.message);
      console.error('Stack trace:', error.stack);
      throw error;
    }
  }
}

// CLI interface
if (require.main === module) {
  const args = process.argv.slice(2);
  const baseUrl = args[0] || 'https://fastsubmit.cloud';
  
  console.log('🔍 Complete SEO Audit Suite');
  console.log('===========================');
  console.log('Combines local and external SEO analysis\n');
  
  const runner = new SEOAuditRunner(baseUrl);
  runner.runCompleteAudit().catch(error => {
    console.error('Fatal error:', error);
    process.exit(1);
  });
}

module.exports = SEOAuditRunner;