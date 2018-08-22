import * as React from 'react';

export interface IProps {
    name: string; 
    enthusiasmLevel?: number;
}

const getExclamationMarks = (numExs: number) => {
    return Array(numExs + 1).join('!');
}

const Hello: React.SFC<IProps> = ({ name, enthusiasmLevel = 1 }: IProps) => {
    if (enthusiasmLevel <= 0) {
        throw new Error('No, sin entusiasmo, no!');

    }

    return (
        <div className="hello">
            <div className="greeting">
                Hello { name + getExclamationMarks(enthusiasmLevel)}
            </div>
        </div>
    );

}

export default Hello;

