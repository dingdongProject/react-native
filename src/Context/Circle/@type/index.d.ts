interface IBoardInfo {
    name: string;
    id: number;
    memberWrite: boolean;
}
interface IPostSimpleInfo {
    title: string;
    content: string;
    id: number;
}

interface ICircleContext {
    isCircle: boolean;
    circleChosen : ICircleInfo | undefined;
    circleNotices: Array<IPostSimpleInfo>;
    circleGallery: Array<string>;
    circleFeeds: Array<IPostSimpleInfo>;
    circleBoards: Array<IBoardInfo>;
    changeToCircle: (arg0: boolean, arg1: number) => void;
    setMainPage:()=> void;
}