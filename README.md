# 📱 Mobile Development with React Native & Expo

A comprehensive introduction to mobile app development using React Native, TypeScript, and Expo framework. Build beautiful, cross-platform mobile applications with native performance and modern UI components.

[![React Native](https://img.shields.io/badge/React_Native-0.74+-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactnative.dev/)
[![Expo](https://img.shields.io/badge/Expo-51+-000020?style=for-the-badge&logo=expo&logoColor=white)](https://expo.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![iOS](https://img.shields.io/badge/iOS-Compatible-000000?style=for-the-badge&logo=apple&logoColor=white)](https://www.apple.com/ios/)
[![Android](https://img.shields.io/badge/Android-Compatible-3DDC84?style=for-the-badge&logo=android&logoColor=white)](https://www.android.com/)

<div align="center">

### 🌟 One Codebase, Two Platforms - Build Native Mobile Apps 🌟

*From zero to mobile hero with React Native and Expo*

[Features](#-key-features) • [Quick Start](#-quick-start) • [Components](#-core-components) • [Projects](#-project-breakdown)

</div>

---

## 📋 Project Overview

This project is part of the **ALX ProDev Frontend** curriculum (**Milestone 5**), designed to teach mobile app development fundamentals using React Native and Expo. You'll build **four progressive applications**, learning essential concepts from environment setup to complex UI implementation.

### 🎯 Why React Native + Expo?

**React Native** powers apps used by billions:
- 📱 **Facebook** - Social networking
- 📷 **Instagram** - Photo sharing
- 🛒 **Shopify** - E-commerce platform
- 💬 **Discord** - Communication app
- 🎵 **Spotify** - Music streaming (parts)
- ✈️ **Airbnb** - Travel booking

**Benefits:**
- ✅ **Write Once, Run Everywhere** - iOS & Android from one codebase
- ✅ **True Native Performance** - Native components, not web views
- ✅ **Hot Reload** - See changes instantly
- ✅ **Huge Ecosystem** - npm packages & community
- ✅ **Type Safety** - TypeScript for better development

---

## 🌟 Key Features

### 📱 Mobile Development Fundamentals
- **Expo Framework** - Simplified development workflow
- **Expo Go** - Test on physical devices instantly
- **Cross-Platform** - Single codebase for iOS & Android
- **Hot Reload** - Lightning-fast development

### 🎨 UI Components
- **SafeArea** - Handle notches and status bars
- **TouchableOpacity** - Interactive buttons
- **Image & ImageBackground** - Visual content
- **TextInput** - User input forms
- **Styling** - StyleSheet for component styling

### 🔧 Development Tools
- **TypeScript** - Type-safe development
- **Expo Router** - File-based navigation
- **Vector Icons** - @expo/vector-icons
- **Dimensions API** - Responsive layouts

---

## 📁 Project Structure

```
prodev-mobile-setup/
├── mobile-development-setup/     # Task 0: Environment setup
│   └── README.md
├── prodev-mobile-app-0x00/       # Task 1: First mobile app
│   ├── app/
│   │   ├── (tabs)/
│   │   │   └── index.tsx
│   │   └── _layout.tsx
│   ├── app-example/
│   ├── constants/
│   │   └── Colors.tsx
│   ├── assets/
│   └── README.md
├── prodev-mobile-app-0x01/       # Task 2: Components & Styling
│   ├── app/
│   │   └── index.tsx
│   └── package.json
├── prodev-mobile-app-0x02/       # Task 3: SafeArea, Images & Touch
│   ├── app/
│   │   └── index.tsx
│   ├── assets/
│   │   └── images/
│   │       ├── Logo.png
│   │       └── background-image.png
│   └── package.json
└── prodev-mobile-app-0x03/       # Task 4: Complete Login UI
    ├── app/
    │   ├── index.tsx
    │   └── _layout.tsx
    ├── styles/
    │   └── index.tsx
    ├── assets/
    │   └── images/
    │       ├── logo.png
    │       ├── google.png
    │       ├── facebook.png
    │       └── splash.png
    └── package.json
```

---

## 🚀 Quick Start

### Prerequisites

**Required:**
- ✅ **Node.js LTS** (v16 or higher)
- ✅ **VS Code** (or preferred IDE)
- ✅ **Physical Device** (iOS or Android)
- ✅ **Expo Go App** - [Install from stores](#task-0-expo-go-setup)

**System Requirements:**
- **macOS**, **Linux**, or **Windows**
- **4GB RAM minimum** (8GB recommended)
- **Stable internet connection**

### Global Installation

```bash
# Install Expo CLI globally (optional but recommended)
npm install -g expo-cli

# Verify installation
expo --version
```

### Quick Setup

```bash
# Clone repository
git clone https://github.com/Dwaynemaster007/prodev-mobile-setup.git
cd prodev-mobile-setup

# Navigate to specific project
cd prodev-mobile-app-0x00

# Install dependencies
npm install

# Start development server
npx expo start
```

---

## 📚 Task Breakdown

### Task 0: Expo Go Setup & Environment Configuration 🛠️

**Objective:** Set up mobile development environment with Expo Go.

#### Why Expo Go?

Mobile development traditionally requires:
- 💻 **Expensive Hardware** - Mac for iOS, powerful PC for Android
- ⏰ **Slow Build Times** - Minutes for each test
- 📱 **Multiple Emulators** - Managing different device versions

**Expo Go Solves This:**
- ✅ Test on your actual phone
- ✅ Instant updates via QR code
- ✅ No emulator setup needed
- ✅ Works on iOS & Android

#### Installation Steps

**For iOS:**
1. Open **App Store** on your iPhone
2. Search for "**Expo Go**"
3. Tap **Get** to install
4. Open app and create account

**For Android:**
1. Open **Google Play Store**
2. Search for "**Expo Go**"
3. Tap **Install**
4. Open app and create account

#### Testing Connection

```bash
# Create test project
npx create-expo-app test-app
cd test-app

# Start development server
npx expo start

# Scan QR code with:
# iOS: Camera app
# Android: Expo Go app
```

**What You Learned:**
✅ Expo Go installation and setup  
✅ Physical device testing workflow  
✅ QR code connection process  
✅ Development server basics  
✅ Cost-effective mobile testing

---

### Task 1: First Mobile App Creation 📱

**Objective:** Create your first React Native app using Expo Router.

#### Step 1: Create Project

```bash
# Navigate to parent directory
cd prodev-mobile-setup

# Create new Expo app with latest Router template
npx create-expo-app@latest prodev-mobile-app-0x00

# Navigate to project
cd prodev-mobile-app-0x00

# Install dependencies
npm install
```

#### Step 2: Modify Home Screen

**File:** `app/(tabs)/index.tsx`

```typescript
import { Text, View, StyleSheet } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>First App Created</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
  },
});
```

#### Step 3: Run Application

```bash
# Start Expo development server
npx expo start

# Options displayed:
# › Press s │ switch to Expo Go
# › Press a │ open Android
# › Press i │ open iOS simulator
# › Press w │ open web

# Scan QR code with:
# iOS: Camera app
# Android: Expo Go app
```

#### Step 4: Reset Project

```bash
# Reset to clean slate
npm run reset-project
```

**What Happens:**
- Removes example screens
- Clears unnecessary files
- Provides fresh app structure
- Keeps essential configuration

**Project Structure:**
```
prodev-mobile-app-0x00/
├── app/
│   ├── (tabs)/          # Tab navigation screens
│   │   ├── index.tsx    # Home screen
│   │   └── explore.tsx  # Explore screen
│   ├── +not-found.tsx   # 404 screen
│   └── _layout.tsx      # Root layout
├── assets/              # Images, fonts
├── constants/           # App constants
│   └── Colors.tsx
├── components/          # Reusable components
├── hooks/               # Custom hooks
└── scripts/             # Utility scripts
```

**What You Learned:**
✅ Expo Router project structure  
✅ File-based navigation  
✅ React Native components (View, Text)  
✅ StyleSheet for styling  
✅ Development server workflow  
✅ Reset project command

---

### Task 2: Components & Styling 🎨

**Objective:** Master React Native core components and styling system.

#### Step 1: Create New Project

```bash
# Create new app
npx create-expo-app@latest prodev-mobile-app-0x01

cd prodev-mobile-app-0x01

# Reset to clean state
npm run reset-project
```

#### Step 2: Implement Styled Components

**File:** `app/index.tsx`

```typescript
import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Entry Screen - Awesome</Text>
      
      <View style={styles.textContainer}>
        <Text style={styles.largeText}>
          Typescript is great if you practice more
        </Text>
        <Text style={styles.mediumText}>
          React Native provides you a single codebase for cross platforms
        </Text>
        <Text style={styles.smallText}>
          ALX is awesome
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#90caf9",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 30,
    textAlign: "center",
  },
  textContainer: {
    gap: 15,
  },
  largeText: {
    fontSize: 30,
    color: "#f44336",
    fontWeight: "700",
    fontVariant: ["small-caps"],
    marginBottom: 5,
  },
  mediumText: {
    fontSize: 20,
    color: "#9c27b0",
    fontWeight: "500",
    textAlign: "right",
    marginBottom: 10,
  },
  smallText: {
    fontSize: 15,
    color: "#2196f3",
    fontWeight: "400",
    textAlign: "center",
  },
});
```

**Styling Concepts:**

**1. StyleSheet.create()**
- Optimizes style objects
- Validates style properties
- Better performance than inline styles

**2. Flexbox Layout**
```typescript
flex: 1              // Takes available space
justifyContent: "center"  // Vertical alignment
alignItems: "center"      // Horizontal alignment
flexDirection: "row"      // Horizontal layout
```

**3. Text Styling**
```typescript
fontSize: 20         // Size in pixels
fontWeight: "700"    // Bold (100-900)
color: "#f44336"     // Hex color
textAlign: "center"  // Text alignment
fontVariant: ["small-caps"]  // Text variant
```

**What You Learned:**
✅ View and Text components  
✅ StyleSheet.create() method  
✅ Flexbox layout system  
✅ Typography styling  
✅ Color system  
✅ Component composition

---

### Task 3: SafeArea, Images & TouchableOpacity 🖼️

**Objective:** Implement SafeArea, images, and interactive elements.

#### Step 1: Setup Project

```bash
# Create new app
npx create-expo-app@latest prodev-mobile-app-0x02

cd prodev-mobile-app-0x02

# Reset project
npm run reset-project

# Install required packages
npm install react-native-safe-area-context
```

#### Step 2: Add Assets

Create `assets/images/` directory and add:
- `Logo.png` - Company logo
- `background-image.png` - Background image

#### Step 3: Implement Welcome Screen

**File:** `app/index.tsx`

```typescript
import {
  Text,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <ImageBackground
          source={require("@/assets/images/background-image.png")}
          style={styles.background}
          resizeMode="cover"
        >
          <View style={styles.container}>
            {/* Company Logo */}
            <View style={styles.companyLogo}>
              <Image source={require("@/assets/images/Logo.png")} />
            </View>

            {/* Text Content */}
            <View style={styles.textGroup}>
              <Text style={styles.textLarge}>
                Find your favorite place here
              </Text>
              <Text style={styles.textSmall}>
                The best prices for over 2
              </Text>
              <Text style={styles.textSmall}>
                million properties worldwide
              </Text>
            </View>

            {/* Buttons */}
            <View style={styles.bottomContainer}>
              <View style={styles.buttonGroup}>
                <TouchableOpacity style={styles.button}>
                  <Text style={{ ...styles.textSmall, color: "black" }}>
                    Join here
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.transparentButton}>
                  <Text style={styles.textSmall}>Sign In</Text>
                </TouchableOpacity>
              </View>

              <View style={{ alignItems: "center", paddingVertical: 20 }}>
                <Text style={{ color: "white" }}>Continue to home</Text>
              </View>
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    height: Dimensions.get("window").height,
  },
  companyLogo: {
    width: "100%",
    alignItems: "center",
    padding: 20,
    marginBottom: 50,
  },
  textGroup: {
    alignItems: "center",
  },
  textLarge: {
    color: "white",
    fontWeight: "800",
    fontSize: 40,
    textAlign: "center",
    marginBottom: 12,
  },
  textSmall: {
    color: "white",
    fontSize: 18,
    fontWeight: "200",
    textAlign: "center",
  },
  bottomContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  buttonGroup: {
    flexDirection: "row",
    gap: 20,
    paddingHorizontal: 20,
  },
  button: {
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 40,
    paddingVertical: 15,
    paddingHorizontal: 5,
    alignItems: "center",
    fontSize: 20,
    backgroundColor: "white",
    flex: 1,
  },
  transparentButton: {
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 40,
    paddingVertical: 15,
    paddingHorizontal: 5,
    alignItems: "center",
    fontSize: 20,
    flex: 1,
  },
});
```

**Key Components Explained:**

**1. SafeAreaProvider & SafeAreaView**
```typescript
<SafeAreaProvider>
  <SafeAreaView style={{ flex: 1 }}>
    {/* Content avoids notches, status bar, home indicator */}
  </SafeAreaView>
</SafeAreaProvider>
```

**2. ImageBackground**
```typescript
<ImageBackground
  source={require("@/assets/images/background.png")}
  resizeMode="cover"  // cover, contain, stretch, repeat, center
  style={styles.background}
>
```

**3. Dimensions API**
```typescript
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const screenHeight = Dimensions.get("screen").height;
```

**4. TouchableOpacity**
```typescript
<TouchableOpacity
  style={styles.button}
  onPress={() => console.log("Pressed")}
  activeOpacity={0.7}  // Opacity when pressed
>
  <Text>Press Me</Text>
</TouchableOpacity>
```

**What You Learned:**
✅ SafeArea for device compatibility  
✅ ImageBackground component  
✅ Dimensions API for responsive design  
✅ TouchableOpacity for interactions  
✅ Position absolute for overlays  
✅ Flex and gap for layouts

---

### Task 4: Complete Login UI 🔐

**Objective:** Build a production-quality login screen with forms and social auth.

#### Step 1: Project Setup

```bash
# Create new app
npx create-expo-app@latest prodev-mobile-app-0x03

cd prodev-mobile-app-0x03

# Reset project
npm run reset-project

# Install dependencies
npm install react-native-safe-area-context @expo/vector-icons
```

#### Step 2: Create Styles Module

**File:** `styles/index.tsx`

```typescript
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    position: "relative",
  },
  navGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    marginTop: 11,
  },
  largeText: {
    fontSize: 40,
    fontWeight: "700",
  },
  smallText: {
    fontSize: 12,
    color: "#7E7B7B",
  },
  placeholderText: {
    fontSize: 18,
    color: "#7E7B7B",
    marginBottom: 7,
  },
  inputField: {
    borderWidth: 1,
    borderRadius: 10,
    height: 50,
    borderColor: "#7E7B7B",
    paddingHorizontal: 10,
  },
  passwordGroup: {
    flexDirection: "row",
    borderWidth: 1,
    alignItems: "center",
    height: 50,
    borderRadius: 10,
    paddingHorizontal: 10,
    borderColor: "#7e7b7b",
  },
  formGroup: {
    marginTop: 44,
  },
  forgotPasswordText: {
    fontSize: 17,
    marginTop: 9,
    textAlign: "right",
    color: "#34967C",
  },
  button: {
    backgroundColor: "#2B876E",
    height: 53,
    borderRadius: 10,
    marginTop: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 17,
    color: "white",
  },
  socialMediaButton: {
    borderWidth: 1,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  socialMediaButtonText: {
    fontSize: 18,
    color: "#0D0D0D",
    fontWeight: "400",
  },
  socialMediaButtonGroup: {
    gap: 15,
    marginTop: 25,
  },
  dividerGroup: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginTop: 29,
  },
  divider: {
    borderWidth: 0.5,
    borderColor: "#c2c2c2",
    flex: 1,
  },
  dividerText: {
    fontSize: 17,
    color: "#C2C2C2",
  },
  subTextGroup: {
    flexDirection: "row",
    position: "absolute",
    bottom: 33,
    left: 77,
    right: 76,
  },
  subText: {
    fontSize: 18,
    color: "#b5b5b5",
  },
  subTextJoin: {
    fontSize: 18,
    color: "#FFA800",
    fontWeight: "600",
  },
});

export { styles };
```

#### Step 3: Configure Layout

**File:** `app/_layout.tsx`

```typescript
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    />
  );
}
```

#### Step 4: Build Login Screen

**File:** `app/index.tsx`

```typescript
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import { styles } from "@/styles";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { FontAwesome, Ionicons } from "@expo/vector-icons";

export default function Index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        {/* Navigation */}
        <View style={styles.navGroup}>
          <Ionicons name="arrow-back" size={25} />
          <Image source={require("@/assets/images/logo.png")} />
        </View>

        {/* Header Text */}
        <Text style={styles.largeText}>Sign in to your</Text>
        <Text style={styles.largeText}>Account</Text>
        <Text style={styles.smallText}>
          Enter your email and password to sign in.
        </Text>

        {/* Form */}
        <View style={styles.formGroup}>
          {/* Email Input */}
          <View>
            <Text style={styles.placeholderText}>Email</Text>
            <TextInput
              keyboardType="email-address"
              style={styles.inputField}
              autoCapitalize="none"
            />
          </View>

          {/* Password Input */}
          <View style={{ marginTop: 20 }}>
            <Text style={styles.placeholderText}>Password</Text>
            <View style={styles.passwordGroup}>
              <TextInput
                style={{ flex: 1 }}
                secureTextEntry
              />
              <FontAwesome name="eye-slash" size={24} color="#7E7B7B" />
            </View>
          </View>

          <Text style={styles.forgotPasswordText}>Forgot password?</Text>
        </View>

        {/* Sign In Button */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sign in</Text>
        </TouchableOpacity>

        {/* Divider */}
        <View style={styles.dividerGroup}>
          <View style={styles.divider}></View>
          <Text style={styles.dividerText}>OR</Text>
          <View style={styles.divider}></View>
        </View>

        {/* Social Media Buttons */}
        <View style={styles.socialMediaButtonGroup}>
          <TouchableOpacity style={styles.socialMediaButton}>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
              <Image source={require("@/assets/images/google.png")} />
              <Text style={styles.socialMediaButtonText}>
                Continue with Google
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.socialMediaButton}>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
              <Image source={require("@/assets/images/facebook.png")} />
              <Text style={styles.socialMediaButtonText}>
                Continue with Facebook
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Sign Up Text */}
        <View style={styles.subTextGroup}>
          <Text style={styles.subText}>Don't have an account?</Text>
          <Text style={styles.subTextJoin}>Join now</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
```

**What You Learned:**
✅ TextInput for forms  
✅ Keyboard types  
✅ Secure text entry  
✅ Vector icons (@expo/vector-icons)  
✅ Modular styles  
✅ Complex layouts  
✅ Social auth UI patterns

---

## 🎯 React Native Components Reference

### Layout Components

```typescript
// View - Container (like div)
<View style={styles.container}>
  {/* Content */}
</View>

// ScrollView - Scrollable container
<ScrollView>
  {/* Scrollable content */}
</ScrollView>

// SafeAreaView - Avoid notches/bars
<SafeAreaView>
  {/* Safe content */}
</SafeAreaView>
```

### Text & Input

```typescript
// Text - Display text
<Text style={styles.text}>Hello</Text>

// TextInput - User input
<TextInput
  value={value}
  onChangeText={setValue}
  placeholder="Enter text"
  keyboardType="email-address"
  secureTextEntry={true}
/>
```

### Interactive

```typescript
// TouchableOpacity - Pressable with opacity
<TouchableOpacity onPress={handlePress} activeOpacity={0.7}>
  <Text>Press Me</Text>
</TouchableOpacity>

// Button - Simple button
<Button title="Press" onPress={handlePress} color="#007AFF" />

// Pressable - Advanced touch handling
<Pressable onPress={handlePress}>
  {({ pressed }) => <Text>{pressed ? "Pressed" : "Press"}</Text>}
</Pressable>
```

### Media

```typescript
// Image - Display images
<Image
  source={require("./image.png")}
  style={styles.image}
  resizeMode="cover"
/>

// ImageBackground - Background image
<ImageBackground source={require("./bg.png")}>
  {/* Content */}
</ImageBackground>
```

---

## 📱 Mobile-Specific Considerations

### SafeArea Implementation

```typescript
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

<SafeAreaProvider>
  <SafeAreaView style={{ flex: 1 }}>
    {/* Content automatically avoids:
        - Status bar
        - Notch (iPhone X+)
        - Home indicator
        - Navigation bar (Android)
    */}
  </SafeAreaView>
</SafeAreaProvider>
```

### Responsive Design

```typescript
import { Dimensions, Platform } from "react-native";

// Get device dimensions
const { width, height } = Dimensions.get("window");

// Platform-specific code
const styles = StyleSheet.create({
  container: {
    padding: Platform.OS === "ios" ? 20 : 16,
    ...Platform.select({
      ios: { shadowOffset: { width: 0, height: 2 } },
      android: { elevation: 4 },
    }),
  },
});
```

### Keyboard Handling

```typescript
import { KeyboardAvoidingView, Platform } from "react-native";

<KeyboardAvoidingView
  behavior={Platform.OS === "ios" ? "padding" : "height"}
  style={{ flex: 1 }}
>
  <TextInput placeholder="Type here" />
</KeyboardAvoidingView>
```

---

## 🛠️ Available Commands

### Expo Commands

```bash
# Start development server
npx expo start

# Start with cache cleared
npx expo start --clear

# Specific platform
npx expo start --ios
npx expo start --android
npx expo start --web

# Build for production
npx expo build:android
npx expo build:ios

# Install packages
npx expo install package-name

# Doctor (check environment)
npx expo-doctor
```

### Project Commands

```bash
# Install dependencies
npm install

# Reset project to clean state
npm run reset-project

# Run on specific platform
npm run ios
npm run android
npm run web

# Lint code
npm run lint
```

---

## 🎓 Learning Outcomes

After completing this project, you can:

### React Native Fundamentals
✅ Set up Expo development environment  
✅ Use Expo Go for testing  