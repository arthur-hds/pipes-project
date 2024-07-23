import { Injectable } from "@angular/core";
import { IUserResponse } from "../../interface/user-response.interface";
import { UsersList } from "../../data/users.list";
import { Observable, of } from "rxjs";
import { UsersResponseList } from "../types/users-response.type";

@Injectable({
    providedIn: "root"
})
export class UsersService {
    

    getUsers(): Observable<UsersResponseList>{
    
        const users: UsersResponseList = UsersList;
    
        return of(users);

    }

}