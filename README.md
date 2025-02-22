
# 🛍️ JUST UX - E-commerce User Interface Kit
This project is a high-quality ecommerce user interface kit designed to help developers rapidly create polished, modern e-commerce websites. It provides a range of pre-built components, styles, and content blocks that streamline the development process. The kit is fully customizable to suit your specific needs, making it ideal for building super-fast e-commerce websites.

# 📦 Key Features
Responsive Layout: The design adapts seamlessly to both desktop and mobile devices.
Pre-built Components: Buttons, steppers, filter options, and more, all ready to integrate.
Reusable Content Blocks: Hero sections, CTAs, pricing sections, and more for quick prototyping.
Customizable Styles: Modify the color scheme, typography, and layouts effortlessly.

# 🖼️ UI Preview
Header Section
The main page features an attractive header with the project title and a sleek description of the kit.

```
<h1 className="text-2xl text-[#8F94FF]">JUST UX</h1>
<h1 className="text-4xl text-[#FFFFFF]">ecommerce user interface kit</h1>
```

# Product Showcase
A set of images displaying various products, styled using flexible and responsive Tailwind classes.

```
<Image src="image/chair.svg" alt="chair" className="h-[199px] w-[109px]" />
```

# Responsive Design
The project is mobile-first with optimizations for smaller screens. Here's how the layout adjusts for mobile:
```
@media (max-width: 480px) {
  .mien:hidden {
    display: none;
  }
  .max:block {
    display: block;
  }
}
```

# 📐 Components and Layouts
This UI kit provides pre-configured components and layouts for both desktop and mobile views.

Component Styles:
Headings
Buttons (Primary, Secondary, Disabled)
Content Blocks:
Hero Sections
Forms
Call-to-Actions
Pricing Sections
The design follows a grid layout system with built-in spacing, ensuring a clean and organized presentation.

```
<div className="grid grid-cols-4 max:grid-cols-1">
  <div className="h-[322px] w-[620px] bg-[#4E4D93]">
    <h1>Use the styles</h1>
  </div>
</div>
```

# 🌟 Customization
Easily customize the styles and components using Figma design styles. You can modify typography, colors, and more in your favorite design tool and implement them in code.
