import { usersArray } from "./users";
import { usersInfoArra } from "./userInfo";

type resultObj = {
    name: string;
    position: string;
    age: number;
    gender: string;
}

function getUsersJobPositions(usersArray: {userid: string; name: string; gender: string}[]):resultObj[]{
    return usersArray.map((obj)=>{
        return {
            name: obj.name,
            position: usersInfoArra.find((infoArrayObj) => infoArrayObj.userid == obj.userid).organization.position,
            age: usersInfoArra.find((infoArrayObj) => infoArrayObj.userid == obj.userid).age,
            gender: obj.gender
        }
    })
}

const usersPositions = getUsersJobPositions(usersArray);

console.log('userPositions', usersPositions);
