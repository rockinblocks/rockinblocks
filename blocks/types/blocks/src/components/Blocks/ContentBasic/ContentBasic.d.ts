import { FC } from "react";
export interface IContentBasicProps {
    content: string;
}
export declare const ContentBasic: FC<IContentBasicProps>;
export default ContentBasic;
export declare const ContentBasicBlock: {
    label: string;
    key: string;
    defaultItem: {
        contentBasic__content: string;
        contentBasic__flexDirection: string;
    };
    fields: {
        name: string;
        label: string;
        component: string;
    }[];
};
