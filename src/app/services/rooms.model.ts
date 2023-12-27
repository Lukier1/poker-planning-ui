export interface Room {
    id: string,
    users: User[],
    hiddenVotes: boolean,
};

export interface User {
    id: string,
    name: string,
    lfieTimeEnd: string,
    vote: string
}
