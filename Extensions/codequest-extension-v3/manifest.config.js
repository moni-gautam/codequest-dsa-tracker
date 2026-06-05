export default {
  manifest_version: 3,

  name: "CodeQuest",

  version: "1.0",

  permissions: [
    "activeTab",
    "scripting",
    "storage",
    "identity"
  ],

  host_permissions: [
    "https://leetcode.com/*"
  ],

  action: {
    default_popup: "index.html"
  }
};