import * as React from 'react';

interface IProps {
    name: string;
    isTheHouseOfPaperStyle: boolean;
}

class Bye extends React.Component<IProps, object> {
    public render() {
        const { name, isTheHouseOfPaperStyle } = this.props;
        return (
            <div>{`Chau, ${name} ${isTheHouseOfPaperStyle ? " chau, chau, chau!" : ""}`}</div>
        );
    }
}

export default Bye;