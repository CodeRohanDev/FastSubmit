# Custom Form Branding - Testing Checklist

## ✅ Pre-Testing Setup

- [x] Code compiled successfully
- [x] No TypeScript errors
- [x] No linting issues
- [x] Build completed without errors

## 🧪 Manual Testing Checklist

### 1. Form Settings Page

#### Access
- [ ] Navigate to `/dashboard/forms/[formId]/settings`
- [ ] Verify "Custom Branding" section is visible
- [ ] Section appears after "Form Name" and before "Fields"

#### Logo Field
- [ ] Enter a valid logo URL
- [ ] Verify preview shows the logo
- [ ] Enter an invalid URL
- [ ] Verify broken image is hidden in preview
- [ ] Clear the logo URL
- [ ] Verify preview updates accordingly

#### Company Name Field
- [ ] Enter a company name
- [ ] Verify it appears in preview
- [ ] Clear the field
- [ ] Verify preview updates

#### Tagline Field
- [ ] Enter a tagline
- [ ] Verify it appears in preview
- [ ] Clear the field
- [ ] Verify preview updates

#### Save Functionality
- [ ] Fill in all branding fields
- [ ] Click "Save changes"
- [ ] Verify success message appears
- [ ] Refresh the page
- [ ] Verify branding data persists

#### Preview Section
- [ ] Verify preview only shows when at least one field has a value
- [ ] Verify logo displays correctly
- [ ] Verify company name displays correctly
- [ ] Verify tagline displays correctly
- [ ] Verify layout matches expected design

### 2. Public Form Page

#### Access
- [ ] Navigate to `/f/[formId]`
- [ ] Verify form loads correctly

#### Branding Display (With All Fields)
- [ ] Verify branding section appears at top of form
- [ ] Verify it's above the form title
- [ ] Verify logo displays correctly
- [ ] Verify company name displays correctly
- [ ] Verify tagline displays correctly
- [ ] Verify proper spacing and alignment

#### Branding Display (Partial Fields)
- [ ] Test with only logo
- [ ] Test with only company name
- [ ] Test with only tagline
- [ ] Test with logo + company name
- [ ] Test with company name + tagline
- [ ] Verify layout adjusts appropriately

#### No Branding
- [ ] Remove all branding from settings
- [ ] Verify branding section doesn't appear
- [ ] Verify form displays normally

#### Theme Support
- [ ] Test in light theme (`?theme=light`)
- [ ] Verify colors are appropriate
- [ ] Test in dark theme (`?theme=dark`)
- [ ] Verify colors are appropriate

#### Embedded Mode
- [ ] Test in embedded mode (`?embedded=true`)
- [ ] Verify branding displays correctly
- [ ] Verify layout is appropriate

### 3. Form Preview Page

#### Access
- [ ] Navigate to `/dashboard/forms/[formId]/preview`
- [ ] Verify preview loads correctly

#### Branding Display
- [ ] Verify branding appears in preview card
- [ ] Verify it's at the top, above form fields
- [ ] Verify logo displays correctly (smaller size)
- [ ] Verify company name displays correctly
- [ ] Verify tagline displays correctly
- [ ] Verify styling matches preview design

#### Preview Updates
- [ ] Make changes to branding in settings
- [ ] Save changes
- [ ] Return to preview page
- [ ] Verify changes are reflected

### 4. API Response

#### Public Form API
- [ ] Call `/api/public/forms/[formId]`
- [ ] Verify response includes `branding` object
- [ ] Verify branding contains logo, companyName, tagline
- [ ] Test with form that has no branding
- [ ] Verify empty branding object is returned

### 5. Edge Cases

#### Long Text
- [ ] Enter very long company name (50+ characters)
- [ ] Verify it displays without breaking layout
- [ ] Enter very long tagline (100+ characters)
- [ ] Verify it displays without breaking layout

#### Special Characters
- [ ] Enter company name with special characters (&, @, #)
- [ ] Verify they display correctly
- [ ] Enter tagline with emojis
- [ ] Verify they display correctly

#### Invalid Logo URLs
- [ ] Enter URL to non-image file
- [ ] Verify error handling works
- [ ] Enter malformed URL
- [ ] Verify error handling works
- [ ] Enter URL to very large image
- [ ] Verify it loads and scales correctly

#### Multiple Forms
- [ ] Create multiple forms with different branding
- [ ] Verify each form shows its own branding
- [ ] Verify no cross-contamination

### 6. Responsive Design

#### Desktop (>1024px)
- [ ] Verify layout looks good
- [ ] Verify logo size is appropriate
- [ ] Verify text is readable

#### Tablet (768px - 1024px)
- [ ] Verify layout adapts correctly
- [ ] Verify all elements are visible
- [ ] Verify spacing is appropriate

#### Mobile (<768px)
- [ ] Verify layout stacks properly
- [ ] Verify logo scales down
- [ ] Verify text remains readable
- [ ] Verify no horizontal scrolling

### 7. Browser Compatibility

- [ ] Test in Chrome
- [ ] Test in Firefox
- [ ] Test in Safari
- [ ] Test in Edge
- [ ] Test in mobile browsers

### 8. Performance

- [ ] Verify page load time is acceptable
- [ ] Verify logo loads quickly
- [ ] Verify no layout shift when logo loads
- [ ] Verify form submission still works correctly

## 🐛 Known Issues / Notes

- Logo must be publicly accessible URL
- No file upload functionality (URL-based only)
- Logo height is fixed, width scales proportionally
- All branding fields are optional

## ✅ Sign-off

- [ ] All critical tests passed
- [ ] No blocking issues found
- [ ] Feature ready for production

**Tested by:** _________________
**Date:** _________________
**Notes:** _________________
