import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "status"
})
export class UserStatusPipe implements PipeTransform{

    transform(statusId: number): string {
        
        const statusValues: { [key: number]: string } = {
            1 : "Ativo",
            2 : "Inativo"
        }

        return statusValues[statusId];

    }

}