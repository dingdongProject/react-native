interface IUserInfo {
    username : string;
    email : string;
    picture : string;
}
interface ICircleInfo {
    name: string;
    explaination: string;
    picture: string;
}

interface IUserContext {
    isLoading : boolean;
    userInfo : IUserInfo | undefined;
    circleInfo : Array<ICircleInfo>;
    tokenInfo : string | null;
    addCircle : (name : string, explaination : string, picture : string) => void;
    login : (username : string, password : string) => void;
    logout: () => void;
    userset: () => void;
    withdraw: (username : string, password : string) => void;
}