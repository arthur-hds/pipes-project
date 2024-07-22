import { Injectable } from "@angular/core";
import { IUserResponse } from "../../interface/user-response.interface";
import { UsersList } from "../../data/users.list";
import { Observable, of } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class UsersService {
    

    getUsers(): Observable<IUserResponse[]>{
    
        const users: IUserResponse[] = UsersList;
    
        return of(users);

    }

}