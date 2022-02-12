import React, { FC } from 'react';
import { usePayment } from '../../hooks/usePayment';
import { BackButton } from '../buttons/BackButton';
import { TransactionsLink } from '../buttons/TransactionsLink';
import { PoweredBy } from '../sections/PoweredBy';
import { Progress } from '../sections/Progress';
import * as css from './TryAgainRoute.module.pcss';

export const TryAgainRoute: FC = () => {
    const { reset } = usePayment();

    return (
        <div className={css.root}>
            <div className={css.header}>
                <BackButton onClick={reset}>Start Over</BackButton>
                <TransactionsLink />
            </div>
            <div className={css.main}>
                Sorry. You did not win the raffle.  Better luck next time!
            </div>
            <div className={css.footer}>
                <PoweredBy />
            </div>
        </div>
    );
};
