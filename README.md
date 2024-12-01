# React Headmaster 🎉

**React Headmaster** is a lightweight library for managing the `<head>` section of your HTML document in React applications. It allows you to dynamically update the page title, meta tags, and other head elements, making it ideal for SEO optimization and social media integration.

## ✌️ Features

- Dynamically update the document's title and meta tags.
- Perfect for Single Page Applications (SPAs) and SEO.
- Supports meta tags for social media sharing (Open Graph, Twitter Cards).
- Lightweight and easy to integrate into any React project.
- Cleanup on component unmount to avoid stale metadata.

## 👇 Installation

Install the package using npm or yarn:

```bash
npm install react-headmaster
```
## 👌 Usage

### Basic Example

```jsx
import React from 'react';
import { HeadMaster } from 'react-headmaster';

function MyPage() {
  return (
    <div>
      <HeadMaster 
        title="My Awesome Page" 
        meta={{ description: "A page about React SEO and head management." }} 
      />
      <h1>Welcome to My Awesome Page</h1>
    </div>
  );
}

export default MyPage;
```

### Advanced Example

You can update multiple meta tags, including Open Graph tags for social media:

```jsx
import React from 'react';
import { HeadMaster } from 'react-headmaster';

function SocialPage() {
  return (
    <div>
      <HeadMaster
        title="Shareable Content"
        meta={{
          description: "An example of a page with Open Graph tags.",
          "og:title": "Shareable Content",
          "og:description": "This content looks great on social media!",
          "og:image": "https://example.com/image.jpg"
        }}
      />
      <h1>Check out this shareable content!</h1>
    </div>
  );
}

export default SocialPage;
```

## 🔗 API

### `HeadMaster`

`HeadMaster` is a React component that accepts the following props:

| Props        | Type             | Description                         |
| :----------- | :--------------  | :----------------------------------- |
| `title`      | string           | The title to set for the document.  |
| `meta`       | object           | An object where keys are meta tag names and values are content. |

### Example

```jsx
<HeadMaster
  title="My Custom Title"
  meta={{
    description: "Custom meta description",
    "og:type": "website",
    "twitter:card": "summary"
  }}
/>
```

## 🧹 Cleanup

The component automatically cleans up the meta tags when unmounted to avoid stale tags persisting across pages.

## 😎 Contributing

Contributions are welcome! Please submit a pull request or open an issue if you have suggestions.

-------------------------------------------------------------------------------

Enjoy using React Headmaster to enhance your React app's SEO!

Let me know if you'd like any more adjustments! 😊
