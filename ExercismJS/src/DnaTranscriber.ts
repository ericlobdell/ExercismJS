
class DnaTranscriber {

    toRna( dna: string ): string {
        const rnaMap = { C: "G", G: "C", A: "U", T: "A" };

        return dna
            .split( '' )
            .map( c => rnaMap[c] )
            .join( '' );

    }
}