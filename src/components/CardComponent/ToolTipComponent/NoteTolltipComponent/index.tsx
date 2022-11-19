import React from 'react';


import { Information } from '@carbon/icons-react'
import { Tooltip, Button } from '@carbon/react';

type NoteTooltipComponentProps = {
    note: number
}

export const NoteTooltipComponent: React.FC<NoteTooltipComponentProps> = ({ note }: NoteTooltipComponentProps) => {
    return (
        <>
            {
                note > 0 ? 
                    <Tooltip
                        align="bottom"
                        label='Essa é a nota desse livro'
                        tabIndex={0}
                        triggerText="Tooltip label"
                    >
                        <Button
                            size='sm'
                            kind='ghost'
                        >
                            {note}
                        </Button>
                    </Tooltip> 
                : 
                    <Tooltip
                        align="bottom"
                        label='Esse livro não foi lido, por isso ainda não há nota'
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
            }
        </>
    );
};
