import * as React from 'react';
import {connect} from 'react-redux';
import {Form} from '../candidature/form';

interface DispatchProps {
    readonly loadContactPage: () => void;
}

type Props = DispatchProps;

const mapDispatchToProps = (): DispatchProps => {
    return {
        loadContactPage: () => ''
    };
};

class PageContactInternal extends React.Component<Props, void> {

    componentWillMount(): void {
        this.props.loadContactPage();
    }

    render() {
        return (
            <div>
                <div className="wrapper wrapper-contact">
                    <Form/>
                </div>
            </div>);
    }
}

export const PageContact = connect(mapDispatchToProps)(PageContactInternal);