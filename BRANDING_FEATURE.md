# Custom Form Branding Feature

## Overview
This feature allows users to add custom branding to their forms, including a logo, company/brand name, and tagline. The branding appears at the top of the form (above the form name) on both the public form page and preview page.

## What Was Added

### 1. Type Definitions (`src/types/index.ts`)
- Added `FormBranding` interface with:
  - `logo?: string` - URL to logo image
  - `companyName?: string` - Company or brand name
  - `tagline?: string` - Tagline or description
- Updated `Form` interface to include optional `branding?: FormBranding`

### 2. Form Settings Page (`src/app/dashboard/forms/[formId]/settings/page.tsx`)
Added a new "Custom Branding" section where users can:
- Enter logo URL (with preview)
- Enter company/brand name
- Enter tagline
- See a live preview of how the branding will appear

The branding section includes:
- Input fields for all three branding elements
- Real-time preview showing how it will look on the form
- Helpful placeholder text and descriptions
- Icon indicators for each field type

### 3. Public Form Display (`src/app/f/[formId]/page.tsx`)
- Added branding display section at the top of the form card
- Shows logo (if provided) with proper error handling
- Displays company name and tagline
- Styled to match the form's theme (light/dark)
- Appears above the form name/title

### 4. Form Preview Page (`src/app/dashboard/forms/[formId]/preview/page.tsx`)
- Added same branding display as public form
- Shows in the preview so users can see exactly how it will look
- Includes proper styling and layout

### 5. API Route (`src/app/api/public/forms/[formId]/route.ts`)
- Updated to include branding data in the public form response
- Ensures branding is available when forms are loaded

## How to Use

### For Form Creators:
1. Go to Dashboard → Forms → Select a form
2. Click "Settings"
3. Scroll to the "Custom Branding" section
4. Fill in:
   - **Logo URL**: Direct link to your logo image (recommended size: 200x50px)
   - **Company/Brand Name**: Your company or brand name
   - **Tagline**: A short description or tagline
5. See the preview below the inputs
6. Click "Save changes"

### Branding Display:
- Appears at the top of the form, above the form title
- Logo displays on the left (if provided)
- Company name and tagline display to the right of the logo
- If only text is provided (no logo), it displays left-aligned
- Responsive and works on all screen sizes

## Technical Details

### Data Structure:
```typescript
branding: {
  logo: "https://example.com/logo.png",
  companyName: "Acme Inc.",
  tagline: "Building the future of technology"
}
```

### Storage:
- Branding data is stored in Firestore under each form document
- All fields are optional
- Empty strings are saved if fields are left blank

### Display Logic:
- Branding section only renders if at least one field has a value
- Logo has error handling (hides if image fails to load)
- Works with both light and dark themes
- Works in embedded and standalone modes

## Benefits

1. **Brand Recognition**: Users can immediately identify who the form is from
2. **Trust Building**: Professional branding increases form completion rates
3. **Consistency**: Maintain brand identity across all customer touchpoints
4. **Flexibility**: All fields are optional - use what you need
5. **Easy Setup**: Simple URL-based logo system, no file uploads needed

## Future Enhancements (Optional)

- File upload for logos instead of URL
- Custom color schemes
- Custom fonts
- Multiple branding templates
- Branding presets/themes
