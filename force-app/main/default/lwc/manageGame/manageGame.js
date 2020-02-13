function ManageGame() {
    if (ManageGame._schedule) {        // 判断是否已经有单例了
        return ManageGame._schedule
    }
    ManageGame._schedule = this
}

ManageGame.getInstance = function() {
    if (ManageGame._schedule) {        // 判断是否已经有单例了
        return ManageGame._schedule
    }
    ManageGame._schedule = new ManageGame()
    return ManageGame._schedule
}

const schedule1 = new ManageGame()
const schedule2 = ManageGame.getInstance()
/*
export class User {
    constructor(name) {
      this.name = name;
    }
  }
  */
/*
export function User(name,age){
    this.name = name;
    this.age = age;
}
*/
export const User = (name, age)=> {
    this.name = name;
    this.age = '899';
}