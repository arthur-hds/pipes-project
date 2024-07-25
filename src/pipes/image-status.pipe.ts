import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name: "statusImage"
})
export class ImageStatusPipe implements PipeTransform{

    transform(statusId: number): string {
        
        const imageValues: { [key: number]: string } = {
            1: "/assets/icons/voto-positivo.png",
            2: "/assets/icons/voto-negativo.png"
        }

        return imageValues[statusId];

    }

}