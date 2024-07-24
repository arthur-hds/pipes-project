import { Pipe, PipeTransform } from "@angular/core";
import { IUserResponse } from "../interface/user-response.interface";
import { UsersResponseList } from "../app/types/users-response.type";

@Pipe({
    name: "usersFilter"
})
export class UsersFilterPipe implements PipeTransform {

    transform(usersList: UsersResponseList | null, inputValue: string): IUserResponse[] {
        
        if(!usersList){
            return [];
        }


        if(usersList.length === null){
            return usersList;
        }


        let newUsersList: UsersResponseList = [];

        usersList.forEach(user => {
            
            const username = user.user.toUpperCase();
            

            if(username.includes(inputValue.toUpperCase())){
                newUsersList.push(user)
            }
           
        })

        return newUsersList;

    }
}