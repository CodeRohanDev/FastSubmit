# SEO Audit Scripts

Comprehensive SEO audit tools for analyzing your website's search engine optimization.

## 📋 Available Scripts

### 1. Basic SEO Audit (`seo-audit.js`)
Analyzes local code structure and files for SEO best practices.

```bash
npm run seo-audit
# or
node scripts/seo-audit.js [url]
```

**What it checks:**
- ✅ Technical SEO (robots.txt, sitemap, Next.js config)
- ✅ On-page SEO (meta tags, structured data, headings)
- ✅ Content SEO (blog content, landing pages)
- ✅ Internal linking (navigation, breadcrumbs)
- ✅ Performance optimizations
- ✅ Mobile & accessibility features

### 2. Advanced SEO Audit (`seo-audit-advanced.js`)
Tests live website with external API calls and real-world checks.

```bash
npm run seo-audit:advanced
# or
node scripts/seo-audit-advanced.js [url]
```

**What it checks:**
- 🌐 Website accessibility and response times
- 📱 Social media meta tags validation
- 🔍 Search engine indexing status
- 📋 Structured data implementation
- ⚡ Page speed and performance metrics
- 🔒 Security headers and HTTPS
- 📱 Mobile friendliness testing

### 3. Complete SEO Audit (`run-seo-audit.js`)
Combines both local and external audits for comprehensive analysis.

```bash
npm run seo-audit:complete
# or for production URL
npm run seo-audit:complete:prod
```

**Features:**
- 🔄 Runs both basic and advanced audits
- 📊 Generates combined report with unified scoring
- 🎯 Provides prioritized action plan
- 📈 Includes monitoring and maintenance strategy

## 📊 Report Output

Each script generates a detailed markdown report with:

- **Overall SEO Score** (0-100)
- **Category Breakdown** with individual scores
- **Detailed Analysis** with specific findings
- **Priority Recommendations** with action items
- **Quick Wins** for immediate improvements
- **Technical Recommendations** for developers
- **Monitoring Strategy** for ongoing optimization

## 🎯 SEO Categories Analyzed

### Technical SEO
- Robots.txt configuration
- XML sitemap implementation
- Next.js optimizations
- Security headers
- HTTPS implementation
- URL structure

### On-Page SEO
- Meta tags (title, description, keywords)
- Open Graph and Twitter Cards
- Structured data (JSON-LD)
- Heading hierarchy (H1-H6)
- Internal linking structure

### Content SEO
- Blog content analysis
- Landing page optimization
- Use case page coverage
- Content depth and quality
- Keyword targeting

### Performance SEO
- Page load speed
- Core Web Vitals
- Image optimization
- Code splitting
- Caching strategies

### Mobile SEO
- Responsive design
- Viewport configuration
- Touch-friendly elements
- Mobile-specific optimizations

### Social Media SEO
- Open Graph tags
- Twitter Card implementation
- Social media links
- Sharing optimization

## 🚀 Usage Examples

### Quick Local Audit
```bash
# Audit local code structure
npm run seo-audit
```

### Production Website Audit
```bash
# Test live website
npm run seo-audit:full
```

### Complete Analysis
```bash
# Full comprehensive audit
npm run seo-audit:complete:prod
```

### Custom URL Audit
```bash
# Audit any website
node scripts/seo-audit-advanced.js https://example.com
```

## 📈 Interpreting Scores

### Overall Score Ranges:
- **95-100**: 🏆 Outstanding - Industry-leading SEO
- **90-94**: 🌟 Excellent - Very strong SEO foundation
- **80-89**: ⭐ Very Good - Minor optimizations needed
- **70-79**: ✅ Good - Some improvements required
- **60-69**: ⚠️ Needs Improvement - Several issues to address
- **50-59**: ❌ Poor - Major SEO problems
- **0-49**: 💥 Critical - Immediate attention required

### Category Scoring:
Each category is scored independently, allowing you to identify specific areas that need attention.

## 🛠️ Customization

### Adding New Checks
To add custom SEO checks, modify the audit scripts:

1. **Local checks**: Add to `seo-audit.js`
2. **External checks**: Add to `seo-audit-advanced.js`
3. **Combined logic**: Modify `run-seo-audit.js`

### Configuration Options
You can customize the audit by modifying:
- Base URL for testing
- Scoring weights for different categories
- Report format and content
- Check timeouts and thresholds

## 📋 Prerequisites

- Node.js 14+ installed
- Internet connection (for advanced audit)
- Access to the website being audited

## 🔧 Troubleshooting

### Common Issues:

**"Request timeout" errors:**
- Check internet connection
- Verify website is accessible
- Increase timeout values in scripts

**"File not found" errors:**
- Ensure you're running from project root
- Check file paths in scripts
- Verify Next.js project structure

**Permission errors:**
- Run with appropriate permissions
- Check file system access
- Ensure write permissions for reports

## 📚 Additional Resources

### SEO Best Practices:
- [Google Search Central](https://developers.google.com/search)
- [Next.js SEO Guide](https://nextjs.org/learn/seo/introduction-to-seo)
- [Web.dev SEO Audits](https://web.dev/lighthouse-seo/)

### Tools Integration:
- Google Search Console
- Google Analytics
- PageSpeed Insights
- Lighthouse CI

## 🤝 Contributing

To improve the SEO audit scripts:

1. Fork the repository
2. Add new audit checks
3. Update documentation
4. Submit pull request

## 📄 License

These scripts are part of the FastSubmit project and follow the same license terms.

---

*Last updated: December 2024*