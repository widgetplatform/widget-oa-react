# Widget OpenAI Assistants - React

A React component for easily adding a Widget for OpenAI Assistants from WidgetPlatform.com to your website.

See [github.com/widgetplatform/widget-oa](https://github.com/widgetplatform/widget-oa) for source code of widget and [widgetplatform.com](https://widgetplatform.com) for more information about this.

## Features

- 🚀 Easy to integrate
- 🔄 Single instance across page navigation
- 📱 Responsive design
- 🎨 Customizable appearance
- 📦 Lightweight
- 💪 TypeScript support

## Installation

```bash
npm install widget-oa-react
```

or

```bash
yarn add widget-oa-react
```

## Usage

```jsx
import { CustomerChatWidget } from 'widget-oa-react';

function App() {
  return (
    <div>
      <CustomerChatWidget
        id="2c8159ef-6cab-44c2-97eb-44ff87d42387"
        buttonPosition="bottom-right"
        buttonColor="#ffffff"
        buttonBackgroundColor="#3B82F6"
        buttonMargin="1rem"
        displayType="popup"
      />
      {/* Your app content */}
    </div>
  );
}
```

## Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| id | string | Yes | - | Your unique widget ID |
| buttonPosition | 'bottom-right' \| 'bottom-left' \| 'top-right' \| 'top-left' | No | 'bottom-right' | Position of the widget button |
| buttonColor | string | No | '#ffffff' | Color of the button icon |
| buttonBackgroundColor | string | No | '#3B82F6' | Background color of the button |
| buttonMargin | string | No | '1rem' | Margin around the button |
| displayType | 'popup' \| 'modal' | No | 'popup' | How the chat window displays |
| svgIcon | string | No | - | Optional custom SVG icon |

## Browser Support

The widget supports all modern browsers:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Development

To build the library locally:

```bash
# Install dependencies
npm install

# Build the library
npm run build
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

If you have any questions or need help integrating the widget, please open an issue in the GitHub repository.
