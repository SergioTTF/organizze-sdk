import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
import { Account } from '../models/Account';
import { Budget } from '../models/Budget';
import { Category } from '../models/Category';
import { CreditCard } from '../models/CreditCard';
import { Invoice } from '../models/Invoice';
import { PaymentDetails } from '../models/PaymentDetails';
import { Transaction } from '../models/Transaction';
import { TransactionDetails } from '../models/TransactionDetails';
import { User } from '../models/User';

import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";
export class ObservableDefaultApi {
    private requestFactory: DefaultApiRequestFactory;
    private responseProcessor: DefaultApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: DefaultApiRequestFactory,
        responseProcessor?: DefaultApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new DefaultApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new DefaultApiResponseProcessor();
    }

    /**
     * Create bank account
     * @param account 
     */
    public createAccountWithHttpInfo(account: Account, _options?: Configuration): Observable<HttpInfo<Account>> {
        const requestContextPromise = this.requestFactory.createAccount(account, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createAccountWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create bank account
     * @param account 
     */
    public createAccount(account: Account, _options?: Configuration): Observable<Account> {
        return this.createAccountWithHttpInfo(account, _options).pipe(map((apiResponse: HttpInfo<Account>) => apiResponse.data));
    }

    /**
     * Create category
     * @param category 
     */
    public createCategoryWithHttpInfo(category: Category, _options?: Configuration): Observable<HttpInfo<Category>> {
        const requestContextPromise = this.requestFactory.createCategory(category, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createCategoryWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create category
     * @param category 
     */
    public createCategory(category: Category, _options?: Configuration): Observable<Category> {
        return this.createCategoryWithHttpInfo(category, _options).pipe(map((apiResponse: HttpInfo<Category>) => apiResponse.data));
    }

    /**
     * Create a new credit card
     * @param creditCard 
     */
    public createCreditCardWithHttpInfo(creditCard: CreditCard, _options?: Configuration): Observable<HttpInfo<CreditCard>> {
        const requestContextPromise = this.requestFactory.createCreditCard(creditCard, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createCreditCardWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a new credit card
     * @param creditCard 
     */
    public createCreditCard(creditCard: CreditCard, _options?: Configuration): Observable<CreditCard> {
        return this.createCreditCardWithHttpInfo(creditCard, _options).pipe(map((apiResponse: HttpInfo<CreditCard>) => apiResponse.data));
    }

    /**
     * Create transaction
     * @param transaction 
     */
    public createTransactionWithHttpInfo(transaction: Transaction, _options?: Configuration): Observable<HttpInfo<Transaction>> {
        const requestContextPromise = this.requestFactory.createTransaction(transaction, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createTransactionWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create transaction
     * @param transaction 
     */
    public createTransaction(transaction: Transaction, _options?: Configuration): Observable<Transaction> {
        return this.createTransactionWithHttpInfo(transaction, _options).pipe(map((apiResponse: HttpInfo<Transaction>) => apiResponse.data));
    }

    /**
     * Delete bank account
     * @param accountId Account ID
     */
    public deleteAccountWithHttpInfo(accountId: number, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deleteAccount(accountId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteAccountWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete bank account
     * @param accountId Account ID
     */
    public deleteAccount(accountId: number, _options?: Configuration): Observable<void> {
        return this.deleteAccountWithHttpInfo(accountId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Delete category
     * @param categoryId Category ID
     */
    public deleteCategoryWithHttpInfo(categoryId: number, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deleteCategory(categoryId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteCategoryWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete category
     * @param categoryId Category ID
     */
    public deleteCategory(categoryId: number, _options?: Configuration): Observable<void> {
        return this.deleteCategoryWithHttpInfo(categoryId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Delete credit card
     * @param creditCardId Credit card ID
     */
    public deleteCreditCardWithHttpInfo(creditCardId: number, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deleteCreditCard(creditCardId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteCreditCardWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete credit card
     * @param creditCardId Credit card ID
     */
    public deleteCreditCard(creditCardId: number, _options?: Configuration): Observable<void> {
        return this.deleteCreditCardWithHttpInfo(creditCardId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Delete transaction
     * @param transactionId Transaction ID
     */
    public deleteTransactionWithHttpInfo(transactionId: number, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deleteTransaction(transactionId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteTransactionWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete transaction
     * @param transactionId Transaction ID
     */
    public deleteTransaction(transactionId: number, _options?: Configuration): Observable<void> {
        return this.deleteTransactionWithHttpInfo(transactionId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Get bank account details
     * @param accountId Account ID
     */
    public getAccountWithHttpInfo(accountId: number, _options?: Configuration): Observable<HttpInfo<Account>> {
        const requestContextPromise = this.requestFactory.getAccount(accountId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAccountWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get bank account details
     * @param accountId Account ID
     */
    public getAccount(accountId: number, _options?: Configuration): Observable<Account> {
        return this.getAccountWithHttpInfo(accountId, _options).pipe(map((apiResponse: HttpInfo<Account>) => apiResponse.data));
    }

    /**
     * List bank accounts
     */
    public getAccountsWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<Account>>> {
        const requestContextPromise = this.requestFactory.getAccounts(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAccountsWithHttpInfo(rsp)));
            }));
    }

    /**
     * List bank accounts
     */
    public getAccounts(_options?: Configuration): Observable<Array<Account>> {
        return this.getAccountsWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<Account>>) => apiResponse.data));
    }

    /**
     * List budgets for the specified year
     * @param year Year for budgets
     */
    public getBudgetsByYearWithHttpInfo(year: number, _options?: Configuration): Observable<HttpInfo<Array<Budget>>> {
        const requestContextPromise = this.requestFactory.getBudgetsByYear(year, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getBudgetsByYearWithHttpInfo(rsp)));
            }));
    }

    /**
     * List budgets for the specified year
     * @param year Year for budgets
     */
    public getBudgetsByYear(year: number, _options?: Configuration): Observable<Array<Budget>> {
        return this.getBudgetsByYearWithHttpInfo(year, _options).pipe(map((apiResponse: HttpInfo<Array<Budget>>) => apiResponse.data));
    }

    /**
     * List budgets for the specified year and month
     * @param year Year for budgets
     * @param month Month for budgets
     */
    public getBudgetsByYearAndMonthWithHttpInfo(year: number, month: number, _options?: Configuration): Observable<HttpInfo<Array<Budget>>> {
        const requestContextPromise = this.requestFactory.getBudgetsByYearAndMonth(year, month, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getBudgetsByYearAndMonthWithHttpInfo(rsp)));
            }));
    }

    /**
     * List budgets for the specified year and month
     * @param year Year for budgets
     * @param month Month for budgets
     */
    public getBudgetsByYearAndMonth(year: number, month: number, _options?: Configuration): Observable<Array<Budget>> {
        return this.getBudgetsByYearAndMonthWithHttpInfo(year, month, _options).pipe(map((apiResponse: HttpInfo<Array<Budget>>) => apiResponse.data));
    }

    /**
     * List categories
     */
    public getCategoriesWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<Category>>> {
        const requestContextPromise = this.requestFactory.getCategories(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCategoriesWithHttpInfo(rsp)));
            }));
    }

    /**
     * List categories
     */
    public getCategories(_options?: Configuration): Observable<Array<Category>> {
        return this.getCategoriesWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<Category>>) => apiResponse.data));
    }

    /**
     * Get category details
     * @param categoryId Category ID
     */
    public getCategoryWithHttpInfo(categoryId: number, _options?: Configuration): Observable<HttpInfo<Category>> {
        const requestContextPromise = this.requestFactory.getCategory(categoryId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCategoryWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get category details
     * @param categoryId Category ID
     */
    public getCategory(categoryId: number, _options?: Configuration): Observable<Category> {
        return this.getCategoryWithHttpInfo(categoryId, _options).pipe(map((apiResponse: HttpInfo<Category>) => apiResponse.data));
    }

    /**
     * Get credit card details
     * @param creditCardId Credit card ID
     */
    public getCreditCardWithHttpInfo(creditCardId: number, _options?: Configuration): Observable<HttpInfo<CreditCard>> {
        const requestContextPromise = this.requestFactory.getCreditCard(creditCardId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCreditCardWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get credit card details
     * @param creditCardId Credit card ID
     */
    public getCreditCard(creditCardId: number, _options?: Configuration): Observable<CreditCard> {
        return this.getCreditCardWithHttpInfo(creditCardId, _options).pipe(map((apiResponse: HttpInfo<CreditCard>) => apiResponse.data));
    }

    /**
     * Get details of a credit card invoice
     * @param creditCardId Credit card ID
     * @param invoiceId Invoice ID
     */
    public getCreditCardInvoiceWithHttpInfo(creditCardId: number, invoiceId: number, _options?: Configuration): Observable<HttpInfo<Invoice>> {
        const requestContextPromise = this.requestFactory.getCreditCardInvoice(creditCardId, invoiceId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCreditCardInvoiceWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get details of a credit card invoice
     * @param creditCardId Credit card ID
     * @param invoiceId Invoice ID
     */
    public getCreditCardInvoice(creditCardId: number, invoiceId: number, _options?: Configuration): Observable<Invoice> {
        return this.getCreditCardInvoiceWithHttpInfo(creditCardId, invoiceId, _options).pipe(map((apiResponse: HttpInfo<Invoice>) => apiResponse.data));
    }

    /**
     * List payments for a credit card invoice
     * @param creditCardId Credit card ID
     * @param invoiceId Invoice ID
     */
    public getCreditCardInvoicePaymentsWithHttpInfo(creditCardId: number, invoiceId: number, _options?: Configuration): Observable<HttpInfo<PaymentDetails>> {
        const requestContextPromise = this.requestFactory.getCreditCardInvoicePayments(creditCardId, invoiceId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCreditCardInvoicePaymentsWithHttpInfo(rsp)));
            }));
    }

    /**
     * List payments for a credit card invoice
     * @param creditCardId Credit card ID
     * @param invoiceId Invoice ID
     */
    public getCreditCardInvoicePayments(creditCardId: number, invoiceId: number, _options?: Configuration): Observable<PaymentDetails> {
        return this.getCreditCardInvoicePaymentsWithHttpInfo(creditCardId, invoiceId, _options).pipe(map((apiResponse: HttpInfo<PaymentDetails>) => apiResponse.data));
    }

    /**
     * List transactions for a credit card invoice
     * @param creditCardId Credit card ID
     * @param invoiceId Invoice ID
     */
    public getCreditCardInvoiceTransactionsWithHttpInfo(creditCardId: number, invoiceId: number, _options?: Configuration): Observable<HttpInfo<Array<TransactionDetails>>> {
        const requestContextPromise = this.requestFactory.getCreditCardInvoiceTransactions(creditCardId, invoiceId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCreditCardInvoiceTransactionsWithHttpInfo(rsp)));
            }));
    }

    /**
     * List transactions for a credit card invoice
     * @param creditCardId Credit card ID
     * @param invoiceId Invoice ID
     */
    public getCreditCardInvoiceTransactions(creditCardId: number, invoiceId: number, _options?: Configuration): Observable<Array<TransactionDetails>> {
        return this.getCreditCardInvoiceTransactionsWithHttpInfo(creditCardId, invoiceId, _options).pipe(map((apiResponse: HttpInfo<Array<TransactionDetails>>) => apiResponse.data));
    }

    /**
     * List invoices for a credit card
     * @param creditCardId Credit card ID
     */
    public getCreditCardInvoicesWithHttpInfo(creditCardId: number, _options?: Configuration): Observable<HttpInfo<Array<Invoice>>> {
        const requestContextPromise = this.requestFactory.getCreditCardInvoices(creditCardId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCreditCardInvoicesWithHttpInfo(rsp)));
            }));
    }

    /**
     * List invoices for a credit card
     * @param creditCardId Credit card ID
     */
    public getCreditCardInvoices(creditCardId: number, _options?: Configuration): Observable<Array<Invoice>> {
        return this.getCreditCardInvoicesWithHttpInfo(creditCardId, _options).pipe(map((apiResponse: HttpInfo<Array<Invoice>>) => apiResponse.data));
    }

    /**
     * List credit cards
     */
    public getCreditCardsWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<CreditCard>>> {
        const requestContextPromise = this.requestFactory.getCreditCards(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCreditCardsWithHttpInfo(rsp)));
            }));
    }

    /**
     * List credit cards
     */
    public getCreditCards(_options?: Configuration): Observable<Array<CreditCard>> {
        return this.getCreditCardsWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<CreditCard>>) => apiResponse.data));
    }

    /**
     * Get transaction details
     * @param transactionId Transaction ID
     */
    public getTransactionWithHttpInfo(transactionId: number, _options?: Configuration): Observable<HttpInfo<Transaction>> {
        const requestContextPromise = this.requestFactory.getTransaction(transactionId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTransactionWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get transaction details
     * @param transactionId Transaction ID
     */
    public getTransaction(transactionId: number, _options?: Configuration): Observable<Transaction> {
        return this.getTransactionWithHttpInfo(transactionId, _options).pipe(map((apiResponse: HttpInfo<Transaction>) => apiResponse.data));
    }

    /**
     * List transactions
     * @param accountId Account ID
     * @param startDate Start date (format: YYYY-MM-DD)
     * @param endDate End date (format: YYYY-MM-DD)
     */
    public getTransactionsWithHttpInfo(accountId: number, startDate?: string, endDate?: string, _options?: Configuration): Observable<HttpInfo<Array<Transaction>>> {
        const requestContextPromise = this.requestFactory.getTransactions(accountId, startDate, endDate, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTransactionsWithHttpInfo(rsp)));
            }));
    }

    /**
     * List transactions
     * @param accountId Account ID
     * @param startDate Start date (format: YYYY-MM-DD)
     * @param endDate End date (format: YYYY-MM-DD)
     */
    public getTransactions(accountId: number, startDate?: string, endDate?: string, _options?: Configuration): Observable<Array<Transaction>> {
        return this.getTransactionsWithHttpInfo(accountId, startDate, endDate, _options).pipe(map((apiResponse: HttpInfo<Array<Transaction>>) => apiResponse.data));
    }

    /**
     * Get user details
     * @param userId User ID
     */
    public getUserWithHttpInfo(userId: number, _options?: Configuration): Observable<HttpInfo<User>> {
        const requestContextPromise = this.requestFactory.getUser(userId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getUserWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get user details
     * @param userId User ID
     */
    public getUser(userId: number, _options?: Configuration): Observable<User> {
        return this.getUserWithHttpInfo(userId, _options).pipe(map((apiResponse: HttpInfo<User>) => apiResponse.data));
    }

    /**
     * Update bank account
     * @param accountId Account ID
     * @param account 
     */
    public updateAccountWithHttpInfo(accountId: number, account: Account, _options?: Configuration): Observable<HttpInfo<Account>> {
        const requestContextPromise = this.requestFactory.updateAccount(accountId, account, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateAccountWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update bank account
     * @param accountId Account ID
     * @param account 
     */
    public updateAccount(accountId: number, account: Account, _options?: Configuration): Observable<Account> {
        return this.updateAccountWithHttpInfo(accountId, account, _options).pipe(map((apiResponse: HttpInfo<Account>) => apiResponse.data));
    }

    /**
     * Update category
     * @param categoryId Category ID
     * @param category 
     */
    public updateCategoryWithHttpInfo(categoryId: number, category: Category, _options?: Configuration): Observable<HttpInfo<Category>> {
        const requestContextPromise = this.requestFactory.updateCategory(categoryId, category, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateCategoryWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update category
     * @param categoryId Category ID
     * @param category 
     */
    public updateCategory(categoryId: number, category: Category, _options?: Configuration): Observable<Category> {
        return this.updateCategoryWithHttpInfo(categoryId, category, _options).pipe(map((apiResponse: HttpInfo<Category>) => apiResponse.data));
    }

    /**
     * Update credit card details
     * @param creditCardId Credit card ID
     * @param creditCard 
     */
    public updateCreditCardWithHttpInfo(creditCardId: number, creditCard: CreditCard, _options?: Configuration): Observable<HttpInfo<CreditCard>> {
        const requestContextPromise = this.requestFactory.updateCreditCard(creditCardId, creditCard, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateCreditCardWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update credit card details
     * @param creditCardId Credit card ID
     * @param creditCard 
     */
    public updateCreditCard(creditCardId: number, creditCard: CreditCard, _options?: Configuration): Observable<CreditCard> {
        return this.updateCreditCardWithHttpInfo(creditCardId, creditCard, _options).pipe(map((apiResponse: HttpInfo<CreditCard>) => apiResponse.data));
    }

    /**
     * Update transaction
     * @param transactionId Transaction ID
     * @param transaction 
     */
    public updateTransactionWithHttpInfo(transactionId: number, transaction: Transaction, _options?: Configuration): Observable<HttpInfo<Transaction>> {
        const requestContextPromise = this.requestFactory.updateTransaction(transactionId, transaction, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateTransactionWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update transaction
     * @param transactionId Transaction ID
     * @param transaction 
     */
    public updateTransaction(transactionId: number, transaction: Transaction, _options?: Configuration): Observable<Transaction> {
        return this.updateTransactionWithHttpInfo(transactionId, transaction, _options).pipe(map((apiResponse: HttpInfo<Transaction>) => apiResponse.data));
    }

}
