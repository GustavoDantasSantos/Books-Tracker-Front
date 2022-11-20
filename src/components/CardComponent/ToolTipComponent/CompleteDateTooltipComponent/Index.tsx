import React from 'react';


import { Information } from '@carbon/icons-react'
import { Tooltip, Button } from '@carbon/react';

type NoteTooltipComponentProps = {
    date: string
}

export const CompleteDateTooltipComponent: React.FC<NoteTooltipComponentProps> = ({ date }: NoteTooltipComponentProps) => {
    return (
        <>
            {
                date == null ?
                    <Tooltip
                        align="bottom"
                        label='Esse livro não foi lido, por isso ainda não há data de conclusão'
                        tabIndex={0}
                        triggerText="Tooltip label"
                    >
                        <Button
                            size='sm'
                            kind='ghost'
                        >
                            <Information />
                        </Button>
                    </Tooltip>
                    :
                    <></>
            }
        </>
    );
};
