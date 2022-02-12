import React, { FC } from 'react';
import { usePayment } from '../../hooks/usePayment';
import { BackButton } from '../buttons/BackButton';
import { TransactionsLink } from '../buttons/TransactionsLink';
import { PoweredBy } from '../sections/PoweredBy';
import { Progress } from '../sections/Progress';
import * as css from './WinnerRoute.module.pcss';

export const WinnerRoute: FC = () => {
    const { reset } = usePayment();

    window.showConfetti();

    return (
        <div className={css.root}>
            <div className={css.header}>
                <BackButton onClick={reset}>Start Over</BackButton>
                <TransactionsLink />
            </div>
            <div className={css.main}>
                Congratulations!  You have just WON the raffle!
            </div>
            <div className={css.footer}>
                <PoweredBy />
            </div>
        </div>
    );
};
