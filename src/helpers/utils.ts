import { format, parseISO } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

export function formateDate(data: string){
    return format(parseISO(data), "dd 'de' MMM 'de' yyyy", {
        locale: ptBR
    });
};
