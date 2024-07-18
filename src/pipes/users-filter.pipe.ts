import { Pipe, PipeTransform } from "@angular/core";
import { IUserResponse } from "../interface/user-response.interface";

@Pipe({
    name: "usersFilter"
})
export class UsersFilterPipe implements PipeTransform {

    transform(usersList: IUserResponse[], inputValue: string): IUserResponse[] {
        
        let newUsersList: IUserResponse[] = [];

        usersList.forEach(user => {
            
            const username = user.user.toUpperCase();
            

            if(username.includes(inputValue.toUpperCase())){
                newUsersList.push(user)
            }
           
        })

        return newUsersList;

    }
}