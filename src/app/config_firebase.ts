export const FIREBASE_CONFIG = {
  apiKey: "AIzaSyCqQ_4RusR5m04eVeQ_Ap0RxdZY3X_1MpE",
  authDomain: "qlsinhvien-c242a.firebaseapp.com",
  databaseURL: "https://qlsinhvien-c242a.firebaseio.com",
  projectId: "qlsinhvien-c242a",
  storageBucket: "",
  messagingSenderId: "834878495777"
};

export const getdata = data=>{
  let array =[];
  data.forEach(element => {
    let item = element.val();
    item.key = element.key;
    array.push(item);
  });
  return array;
}