import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs";
import { Room, User } from "./rooms.model";

@Injectable()
export class RoomService {
    private readonly baseUrl = 'http://localhost:8080';
    constructor(private readonly httpClient: HttpClient) {

    }

    getRoom(roomId: string) : Observable<Room> {
        return this.httpClient.get<Room>(this.baseUrl + `/rooms/${roomId}`);
    }

    joinRoom(roomId: string, username: string): Observable<User> { 
        return this.httpClient.post<User>(this.baseUrl + `/rooms/${roomId}/users`, {
            username
        });
    }
}
