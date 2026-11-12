CONDIZIONE
è un blocco di codice che mi permette di far intraprendere diverse trade al mio algoritmo, a seconda se la condizione posta in ingresso è rispettata o meno.
Solitamente prevede due frammenti di codice i quali saranno eseguiti soltanto al verificarsi di determinate condizioni

IF
L'if è un tipo di condizione che si evolve nel tempo.
potrebbe diventare IF/ELSE
potrebbe diventare IF/ELSE IF/ELSE

significa che tra un if e un else, ci potrebbero essere altri "altrimenti" - else if
posso avere anche più di un else if tra un if e un else
l'importante è che l'else chiuda sempre

Posso avere un if else, dentro un altro if, annidato? Sì!!!

SWITCH
non vuole una condizione per eseguire il blocco di codice.
Lo switch vuole un valore (UNA CHIAVE) da cui prendere un valore
poi, tra i vari CASI che metto all'interno dello switch, se quel valore lo trova in uno dei casi, allora esegue quel blocco di codice, altrimenti NO.

l'ultimo caso, lo chiameremo default -> corrisponde all'else dell'if else
ma attenzione!
tra un caso e l'altro (tranne nel default), devo inserire per forza la keywork break;
il break; mi interrompe tutte le altre casistiche e termina l'algoritmo

CICLI
- un'azione che si ripete!
FOR - WHILE - DO WHILE

FOR -> il ciclo for viene utilizzato quando sappiamo a monte quante iterazioni voglio fare.
WHILE -> il ciclo while viene utilizzato quando non so a monte quante iterazioni voglio fare
        se la condizione posta in ingresso è immediatamente falsa, il ciclo while non parte
DO WHILE -> il ciclo do while viene utilizzato quando non so a monte quante iterazioni voglio fare, MA se la condizione posta in ingresso è immediatamente falsa, il do while comunque un giro del ciclo se lo fa a prescindere. QUINDI si usa quando vogliamo essere sicuri di voler fare almeno un giro di ciclo a prescindere dalla mia condizione.
