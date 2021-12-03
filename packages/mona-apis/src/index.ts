import "@bytedance/mona";
import adapter from "./adapter";

// BUILD_TARGET will inject by DefinePlugin
const apis = adapter(BUILD_TARGET);

const {
  canIUse,
  base64ToArrayBuffer,
  arrayBufferToBase64,
  getEnterOptionsSync,
  getLaunchOptionsSync,
  exitMiniProgram,
  canIPutStuffOverComponent,
  getUpdateManager,
  onAppShow,
  offAppShow,
  onAppHide,
  offAppHide,
  onError,
  offError,
  env,
  downloadFile,
  request,
  uploadFile,
  connectSocket,
  chooseImage,
  saveImageToPhotosAlbum,
  previewImage,
  getImageInfo,
  compressImage,
  getRecorderManager,
  getBackgroundAudioManager,
  createInnerAudioContext,
  chooseVideo,
  saveVideoToPhotoAlbum,
  createVideoContext,
  craeteLivePlayerContext,
  preloadVideo,
  createCameraContext,
  createEffectCameraStream,
  createMapContext,
  saveFile,
  getFileInfo,
  getSavedFileList,
  openDocument,
  removeSavedFile,
  getFileSystemManager,
  getEnvInfoSync,
  login,
  checkSession,
  getUserInfo,
  getUserInfoProfile,
  createRewardedVideoAd,
  createInterstitialAd,
  pay,
  navigateToMiniProgram,
  navigateBackMiniProgram,
  chooseAddresses,
  getSetting,
  openSettings,
  authorize,
  showDouyinOpenAuth,
  reportAnalytics,
  canRateAwemeOrders,
  rateAwemeOrder,
  followOfficialAccount,
  checkFollowState,
  openAwemeUserProfile,
  followAwemeUser,
  requestSubscribeMessage,
  openDouyinOrderList,
  openEcGood,
  openEcOrderDetail,
  openEcIm,
  openEcChat,
  openWebcastRoom,
  openDouyinProfile,
  openEcCoupon,
  performance,
  getStorage,
  getStorageSync,
  setStorage,
  setStorageSync,
  removeStorage,
  removeStorageSync,
  clearStorage,
  clearStorageSync,
  getStorageInfo,
  getStorageInfoSync,
  getLocation,
  chooseLocation,
  openLocation,
  getNetworkType,
  onNetworkStatusChange,
  getWifiList,
  onGetWifiList,
  offGetWifiList,
  getSystemInfo,
  getSystemInfoSync,
  getConnectedWifi,
  startAccelerometer,
  stopAccelerometer,
  onAccelerometerChange,
  startCompass,
  stopCompass,
  onCompassChange,
  makePhoneCall,
  scanCode,
  getClipboardData,
  setClipboardData,
  setKeepScreenOn,
  onUserCaptureScreen,
  offUserCaptureScreen,
  getScreenBrightness,
  setScreenBrightness,
  disableUserScreenRecord,
  enableUserScreenRecord,
  onUserScreenRecord,
  offUserScreenRecord,
  vibrateShort,
  vibrateLong,
  onMemoryWarning,
  createCanvasContext,
  createOffscreenCanvas,
  showToast,
  hideToast,
  showLoading,
  hideLoading,
  showModal,
  showActionSheet,
  showFavoriteGuide,
  showInteractionBar,
  hideInteractionBar,
  showNavigationBarLoading,
  hideNavigationBarLoading,
  hideHomeButton,
  setNavigationBarTitle,
  setNavigationBarColor,
  getMenuButtonBoundingClientRect,
  createAnimation,
  pageScrollTo,
  setSwipeBackMode,
  startPullDownRefresh,
  showTabBarRedDot,
  showTabBar,
  setTabBarStyle,
  setTabBarItem,
  setTabBarBadge,
  removeTabBarBadge,
  hideTabBarRedDot,
  hideTabBar,
  getAlgorithmManager,
  createStickerManager,
  createBytennEngineContext,
  navigateTo,
  redirectTo,
  switchTab,
  navigateBack,
  reLaunch,
  showShareMenu,
  hideShareMenu,
  navigateToVideoView,
  getExtConfig,
  getExtConfigSync,
  createSelectorQuery,
  createIntersectionObserver,
  createLiveReportContext,
  getRoomInfo,
  getLiveUserInfo,
  getSelfCommentCountDuringPluginRunning,
  isFollowingAnchor,
  onReceiveAudiencesFollowAction,
  subscribeAudiencesFollowAction,
  unsubscribeAudiencesFollowAction,
  subscribeSpecifiedContentComment,
  subscribeSpecifiedUserComment,
  unsubscribeAllSpecifiedContentComment,
  unsubscribeAllSpecifiedUserComment,
  onReceiveSpecifiedComment,
  open,
} = apis;

export {
  canIUse,
  base64ToArrayBuffer,
  arrayBufferToBase64,
  getEnterOptionsSync,
  getLaunchOptionsSync,
  exitMiniProgram,
  canIPutStuffOverComponent,
  getUpdateManager,
  onAppShow,
  offAppShow,
  onAppHide,
  offAppHide,
  onError,
  offError,
  env,
  downloadFile,
  request,
  uploadFile,
  connectSocket,
  chooseImage,
  saveImageToPhotosAlbum,
  previewImage,
  getImageInfo,
  compressImage,
  getRecorderManager,
  getBackgroundAudioManager,
  createInnerAudioContext,
  chooseVideo,
  saveVideoToPhotoAlbum,
  createVideoContext,
  craeteLivePlayerContext,
  preloadVideo,
  createCameraContext,
  createEffectCameraStream,
  createMapContext,
  saveFile,
  getFileInfo,
  getSavedFileList,
  openDocument,
  removeSavedFile,
  getFileSystemManager,
  getEnvInfoSync,
  login,
  checkSession,
  getUserInfo,
  getUserInfoProfile,
  createRewardedVideoAd,
  createInterstitialAd,
  pay,
  navigateToMiniProgram,
  navigateBackMiniProgram,
  chooseAddresses,
  getSetting,
  openSettings,
  authorize,
  showDouyinOpenAuth,
  reportAnalytics,
  canRateAwemeOrders,
  rateAwemeOrder,
  followOfficialAccount,
  checkFollowState,
  openAwemeUserProfile,
  followAwemeUser,
  requestSubscribeMessage,
  openDouyinOrderList,
  openEcGood,
  openEcOrderDetail,
  openEcIm,
  openEcChat,
  openWebcastRoom,
  openDouyinProfile,
  openEcCoupon,
  performance,
  getStorage,
  getStorageSync,
  setStorage,
  setStorageSync,
  removeStorage,
  removeStorageSync,
  clearStorage,
  clearStorageSync,
  getStorageInfo,
  getStorageInfoSync,
  getLocation,
  chooseLocation,
  openLocation,
  getNetworkType,
  onNetworkStatusChange,
  getWifiList,
  onGetWifiList,
  offGetWifiList,
  getSystemInfo,
  getSystemInfoSync,
  getConnectedWifi,
  startAccelerometer,
  stopAccelerometer,
  onAccelerometerChange,
  startCompass,
  stopCompass,
  onCompassChange,
  makePhoneCall,
  scanCode,
  getClipboardData,
  setClipboardData,
  setKeepScreenOn,
  onUserCaptureScreen,
  offUserCaptureScreen,
  getScreenBrightness,
  setScreenBrightness,
  disableUserScreenRecord,
  enableUserScreenRecord,
  onUserScreenRecord,
  offUserScreenRecord,
  vibrateShort,
  vibrateLong,
  onMemoryWarning,
  createCanvasContext,
  createOffscreenCanvas,
  showToast,
  hideToast,
  showLoading,
  hideLoading,
  showModal,
  showActionSheet,
  showFavoriteGuide,
  showInteractionBar,
  hideInteractionBar,
  showNavigationBarLoading,
  hideNavigationBarLoading,
  hideHomeButton,
  setNavigationBarTitle,
  setNavigationBarColor,
  getMenuButtonBoundingClientRect,
  createAnimation,
  pageScrollTo,
  setSwipeBackMode,
  startPullDownRefresh,
  showTabBarRedDot,
  showTabBar,
  setTabBarStyle,
  setTabBarItem,
  setTabBarBadge,
  removeTabBarBadge,
  hideTabBarRedDot,
  hideTabBar,
  getAlgorithmManager,
  createStickerManager,
  createBytennEngineContext,
  navigateTo,
  redirectTo,
  switchTab,
  navigateBack,
  reLaunch,
  showShareMenu,
  hideShareMenu,
  navigateToVideoView,
  getExtConfig,
  getExtConfigSync,
  createSelectorQuery,
  createIntersectionObserver,
  createLiveReportContext,
  getRoomInfo,
  getLiveUserInfo,
  getSelfCommentCountDuringPluginRunning,
  isFollowingAnchor,
  onReceiveAudiencesFollowAction,
  subscribeAudiencesFollowAction,
  unsubscribeAudiencesFollowAction,
  subscribeSpecifiedContentComment,
  subscribeSpecifiedUserComment,
  unsubscribeAllSpecifiedContentComment,
  unsubscribeAllSpecifiedUserComment,
  onReceiveSpecifiedComment,
  open,
}