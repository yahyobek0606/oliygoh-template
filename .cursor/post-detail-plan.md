# Create Post Detail Page

## Overview
Create a dedicated post detail page that displays full article content with proper formatting, images, metadata, and related content sections.

## Page Structure from Image

### 1. Header Section
- Back button with "Qayitish" text
- Action buttons (share, bookmark, copy link)

### 2. Post Header
- Post title (large, bold)
- Metadata: author, date, view count
- Category badge (e.g., "Foydali", "Abituriyent")

### 3. Main Content Area
- Featured image (large, full-width)
- Article content with:
  - Headings (H2, H3)
  - Paragraphs
  - Bullet/numbered lists
  - Bold text highlights
  - Image gallery (multiple images in grid)
  - Quote/conclusion section (Xulosa)

### 4. Post Footer
- Tags (clickable badges)
- Social share buttons

### 5. Related Posts Section
- "Shu kabi xabarlar" heading
- Grid of 4 related posts with:
  - Thumbnail image
  - Category badge
  - Title
  - Metadata (date, views)

### 6. Right Sidebar
- "Hammabop" (Popular) section with trending posts
- Advertisement card

## Implementation Steps

### 1. Create New HTML File
- Create `pages/post-detail.html`
- Copy header and footer from index.html
- Build post content structure

### 2. Post Content Structure
- Back navigation bar
- Post header with metadata
- Featured image section
- Article body with proper typography
- Image gallery grid
- Quote/conclusion box
- Tags section
- Related posts grid

### 3. Styling Requirements
- Consistent with existing design system
- Proper typography hierarchy
- Image handling and galleries
- Quote box styling
- Responsive layout
- Tag badges styling

### 4. JavaScript Functionality
- Back button navigation
- Share functionality
- Bookmark functionality
- Image lightbox/gallery
- Copy link to clipboard

## Files to Create/Modify
- `pages/post-detail.html` (new file)
- `src/styles.css` (add post-specific styles if needed)

## Key Features
- Clean, readable article layout
- Proper content hierarchy
- Image galleries
- Social sharing
- Related content discovery
- Responsive design
- Consistent with site design

## Design Elements
- Use existing color scheme (blue primary, gray backgrounds)
- Maintain spacing and typography from index.html
- Reuse components (header, sidebar, cards)
- Match existing button and badge styles

