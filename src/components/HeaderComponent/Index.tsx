import React from 'react';
import { User } from '@carbon/icons-react';
import { 
    Theme, 
    Header, 
    HeaderName, 
    HeaderGlobalBar, 
    HeaderGlobalAction 
} from '@carbon/react';

export const HeaderComponent: React.FC = () => {
    return (
        <Theme theme='g90'>
            <Header aria-label="Book Tracker">
                <HeaderName href='#' prefix='Book Tracker' />
                <HeaderGlobalBar>
                    <HeaderGlobalAction>
                        <User />
                    </HeaderGlobalAction>
                </HeaderGlobalBar>
            </Header>
        </Theme>
    );
};