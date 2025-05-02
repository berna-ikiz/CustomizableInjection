# WebView Background Color Changer

A react Native application that dynamically changes the background color of a WebView component

## Features

- Change WebView background color.
- Supports HEX, RGB and named color.
- Works on both ios and Android

## Installation

1. Clone the repository:
```bash
   git clone https://github.com/berna-ikiz/CustomizableInjection.git
```

2. Install dependencies:

```bash
npm install
```
3.Run the App:
```bash
npx react-native run-android

npx react-native run-ios
```

# Usage

1. Enter a color in the input field(e.g, #ff0809, rgb(255,250,200), or blue)
2. Press the "Change Color" button
3. See the WebView background update immediately.

# Code structure
```
/src
├── components
│   └── ColorWebView.tsx  # WebView with color injection logic
├── screens
│   └── HomeScreen.tsx    # Main UI with color input
├── utils
│   └── colorUtils.ts     # Color validation helpers
└── App.tsx               # Root component
```