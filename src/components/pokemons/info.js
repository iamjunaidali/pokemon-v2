import React from 'react';
import Modal from 'react-modal';
import Properties from './properties';
import {
    Table,
    TableBody
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
                    <Properties pokemon={pokemon} />
                </TableBody>
            </Table>
            <button className="margin10" onClick={closeInfo}>close</button>
        </Modal>
    </>;
}

export default Info;
