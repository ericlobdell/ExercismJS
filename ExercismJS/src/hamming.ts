
class Hamming {

    compute( strand1: string, strand2: string ) : number {
        let count = 0;

        if ( areComparableStrands( strand1, strand2 ) ) {
            let i = 0;
            const len = strand1.length;

            for ( ; i < len; i++ )
                if ( strand1[i] !== strand2[i] )
                    count++;
        }

        return count;
    }
}

function areComparableStrands( strand1: string, strand2: string ) {
    if ( strand1.length !== strand2.length )
        throw new Error( 'DNA strands must be of equal length.' );

    return true;
}