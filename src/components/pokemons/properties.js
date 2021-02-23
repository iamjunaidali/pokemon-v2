import React from 'react';
import {
    TableRow,
    TableCell
} from '@material-ui/core';
import { getPokemonProperties } from '../../utils/utils';

const Properties = ({ pokemon }) => {

    const properties = getPokemonProperties();

    return <>
        {
            properties && properties.map(({ title, key }) => (
                <TableRow key={ key }>
                    <TableCell>{ title }</TableCell>
                    <TableCell>{ pokemon[key] }</TableCell>
                </TableRow>
            ))
        }
    </>;
}

export default Properties;
