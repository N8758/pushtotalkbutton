# PushToTalkApp  

## 📌 Project Overview  
PushToTalkApp is a React Native application built using Expo that enables push-to-talk (PTT) communication.  

---

## 🛠️ Prerequisites  
Before running this project, ensure you have the following installed:  

### **1⃣ Install Node.js and npm**  
🔹 Download and install **Node.js** (LTS version) from:  
🔗 [https://nodejs.org/](https://nodejs.org/)  

Verify installation by running:  
```sh
node -v
npm -v
```

### **2⃣ Install Git**  
🔹 Download and install **Git** from:  
🔗 [https://git-scm.com/downloads](https://git-scm.com/downloads)  

Verify installation by running:  
```sh
git --version
```

### **3⃣ Install Expo CLI**  
```sh
npm install -g expo-cli
```
Verify installation:  
```sh
expo --version
```

---

## 🚀 Project Setup  

### **1⃣ Clone the Repository**  
```sh
git clone https://github.com/your-username/PushToTalkApp.git
cd PushToTalkApp
```

### **2⃣ Install Dependencies**  
```sh
npm install
```

---

## 📱 Setting up Android Emulator / Physical Device  

### **1⃣ Install Android Studio & SDK**  
- Download and install **Android Studio** from:  
  🔗 [https://developer.android.com/studio](https://developer.android.com/studio)  
- Open Android Studio and go to:  
  **File > Settings > Appearance & Behavior > System Settings > Android SDK**  
- Install the latest **Android SDK**, **Build Tools**, and **Emulator**.

### **2⃣ Set Up Environment Variables (Windows Users)**  
1. Open **Windows Search**, type `Environment Variables`, and open it.  
2. Under **System Variables**, click **New** and add:  
   - **Variable Name:** `ANDROID_HOME`  
   - **Variable Value:** `C:\Users\YourUserName\AppData\Local\Android\Sdk` (replace with actual SDK path)  
3. Edit the `Path` variable and add:  
   ```
   C:\Users\YourUserName\AppData\Local\Android\Sdk\platform-tools
   C:\Users\YourUserName\AppData\Local\Android\Sdk\tools
   C:\Users\YourUserName\AppData\Local\Android\Sdk\tools\bin
   C:\Users\YourUserName\AppData\Local\Android\Sdk\cmdline-tools\latest\bin
   ```
4. Click **OK** and **Restart your PC**.

### **3⃣ Verify Android Setup**  
Run the following command to check if ADB is working:  
```sh
adb devices
```
If your device/emulator is connected, it should appear in the list.

---

## ▶️ Running the Project  

### **1⃣ Start the Expo Development Server**  
```sh
npx expo start
```
This will launch the Expo Dev Tools in your browser.

### **2⃣ Run on Android Emulator or Physical Device**  

#### **A) Using Android Emulator**  
Make sure your emulator is running and execute:  
```sh
npx expo run:android
```

#### **B) Using Physical Android Device**  
1. Enable **Developer Mode** and **USB Debugging** on your Android phone.  
2. Connect the device via USB.  
3. Run:  
   ```sh
   npx expo run:android
   ```
4. If prompted, allow USB debugging on your phone.

---

## ❌ Troubleshooting  

### **1⃣ Expo CLI Not Found?**  
Try reinstalling:  
```sh
npm install -g expo-cli
```

### **2⃣ Android SDK Not Found?**  
Make sure `ANDROID_HOME` is correctly set in environment variables.

### **3⃣ Emulator Not Found?**  
Start your emulator manually using **Android Studio > AVD Manager**.

### **4⃣ Expo Not Recognizing Device?**  
Check with:  
```sh
adb devices
```
If no devices are listed, ensure USB debugging is enabled.

---

## 📝 License  
This project is open-source under the MIT License.  

---


