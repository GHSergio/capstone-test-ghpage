import { handleAuthorizationCode } from "./Auth";

// 在測試文件中呼叫函式並提供有效的授權碼
const testAuthorizationCode =
  "AQA1nBXONRLxf6cgpRp0l_azWq4Knf6hzpfv5Qsx2K42ZfGOyrSJlZrNxpFmcisRzSCvw2Vdua7SmZEllaACEWWCTA_tPqi4Ye13XpIbGRNbBlkRhtjxoxI0_IxzqP_TfsFqxbWsWa6R1hsRTKzsx_zH1-vqi1MNb5NPRF0kim2QluZigflA7OTbKRuZMwhH-OjEUvGSEG3gpvJVJ0bEGufNlhw4WWnmYGO4AYR__2IRxJXREFS2RomSbpnZntm5ZkxITglIK2EqUaP4Qf9tvZCD-Wj6tAlWSp9LrSpFPpoikFaWTxa4c4y0ALCAMjSumaVXLjcnkcwLmCI";

// 呼叫函式並處理異步操作
handleAuthorizationCode(testAuthorizationCode)
  .then(() => {
    console.log("Token obtained successfully.");
  })
  .catch((error) => {
    console.error("Error:", error);
  });
