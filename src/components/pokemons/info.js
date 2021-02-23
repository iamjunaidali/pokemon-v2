import React from 'react';
import Modal from 'react-modal';
import {
    Table,
    TableBody,
    TableRow,
    TableCell
} from '@material-ui/core';

const infoModalStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
};

const Info = ({ pokemon, infoOpen, closeInfo, playImages }) => {

    return <>
        <Modal
          isOpen={infoOpen}
          onRequestClose={closeInfo}
          style={infoModalStyles}
          contentLabel={`Info About ${pokemon.name}`}
        >
            <div className="pokemon--species--name">{`Properties of ${pokemon.name}`}</div>
            <div className="pokemon--species--sprite">
                <img id={`pokemon--species--sprite--${pokemon.name}`} src={pokemon.sprites.front_default} />
            </div>
            <Table>
                <TableBody>
                    <TableRow>
                        <TableCell>Gender</TableCell>
                        <TableCell>{pokemon.sprites.back_female ? 'Female' : 'Male'}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Height</TableCell>
                        <TableCell>{pokemon.height}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Weight</TableCell>
                        <TableCell>{pokemon.weight}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Speed</TableCell>
                        <TableCell>{pokemon.speed}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Special Defense</TableCell>
                        <TableCell>{pokemon.special_defense}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Special Atatck</TableCell>
                        <TableCell>{pokemon.special_attack}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Defense</TableCell>
                        <TableCell>{pokemon.defense}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Attack</TableCell>
                        <TableCell>{pokemon.attack}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>HP</TableCell>
                        <TableCell>{pokemon.hp}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
            <button className="margin10" onClick={closeInfo}>close</button>
        </Modal>
    </>;
}

export default Info;
