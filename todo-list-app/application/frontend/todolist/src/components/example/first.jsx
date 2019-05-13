import React, { Component } from 'react';

export class First extends Component {
    render () {
        return (
            <div class = "first">
                First Component
            </div>
        );
    }
}

export default function Firstsubpart () {
    return (
        <div class = "firstsubpart">
            FirstSubPart Component
        </div>
    );
}

export class Firstpart extends Component {
    render () {
        return (
            <div class = "firstpart">
                FirstPart Component
            </div>
        );
    }
}

// export function Firstsubpart () {
//     return (
//         <div class = "firstsubpart">
//             FirstSubPart Component
//         </div>
//     );
// }
