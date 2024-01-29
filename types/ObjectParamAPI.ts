import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { Account } from '../models/Account';
import { Budget } from '../models/Budget';
import { Category } from '../models/Category';
import { CreditCard } from '../models/CreditCard';
import { Invoice } from '../models/Invoice';
import { PaymentDetails } from '../models/PaymentDetails';
import { Transaction } from '../models/Transaction';
import { TransactionDetails } from '../models/TransactionDetails';
import { User } from '../models/User';

import { ObservableDefaultApi } from "./ObservableAPI";
import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";

export interface DefaultApiCreateAccountRequest {
    /**
     * 
     * @type Account
     * @memberof DefaultApicreateAccount
     */
    account: Account
}

export interface DefaultApiCreateCategoryRequest {
    /**
     * 
     * @type Category
     * @memberof DefaultApicreateCategory
     */
    category: Category
}

export interface DefaultApiCreateCreditCardRequest {
    /**
     * 
     * @type CreditCard
     * @memberof DefaultApicreateCreditCard
     */
    creditCard: CreditCard
}

export interface DefaultApiCreateTransactionRequest {
    /**
     * 
     * @type Transaction
     * @memberof DefaultApicreateTransaction
     */
    transaction: Transaction
}

export interface DefaultApiDeleteAccountRequest {
    /**
     * Account ID
     * @type number
     * @memberof DefaultApideleteAccount
     */
    accountId: number
}

export interface DefaultApiDeleteCategoryRequest {
    /**
     * Category ID
     * @type number
     * @memberof DefaultApideleteCategory
     */
    categoryId: number
}

export interface DefaultApiDeleteCreditCardRequest {
    /**
     * Credit card ID
     * @type number
     * @memberof DefaultApideleteCreditCard
     */
    creditCardId: number
}

export interface DefaultApiDeleteTransactionRequest {
    /**
     * Transaction ID
     * @type number
     * @memberof DefaultApideleteTransaction
     */
    transactionId: number
}

export interface DefaultApiGetAccountRequest {
    /**
     * Account ID
     * @type number
     * @memberof DefaultApigetAccount
     */
    accountId: number
}

export interface DefaultApiGetAccountsRequest {
}

export interface DefaultApiGetBudgetsByYearRequest {
    /**
     * Year for budgets
     * @type number
     * @memberof DefaultApigetBudgetsByYear
     */
    year: number
}

export interface DefaultApiGetBudgetsByYearAndMonthRequest {
    /**
     * Year for budgets
     * @type number
     * @memberof DefaultApigetBudgetsByYearAndMonth
     */
    year: number
    /**
     * Month for budgets
     * @type number
     * @memberof DefaultApigetBudgetsByYearAndMonth
     */
    month: number
}

export interface DefaultApiGetCategoriesRequest {
}

export interface DefaultApiGetCategoryRequest {
    /**
     * Category ID
     * @type number
     * @memberof DefaultApigetCategory
     */
    categoryId: number
}

export interface DefaultApiGetCreditCardRequest {
    /**
     * Credit card ID
     * @type number
     * @memberof DefaultApigetCreditCard
     */
    creditCardId: number
}

export interface DefaultApiGetCreditCardInvoiceRequest {
    /**
     * Credit card ID
     * @type number
     * @memberof DefaultApigetCreditCardInvoice
     */
    creditCardId: number
    /**
     * Invoice ID
     * @type number
     * @memberof DefaultApigetCreditCardInvoice
     */
    invoiceId: number
}

export interface DefaultApiGetCreditCardInvoicePaymentsRequest {
    /**
     * Credit card ID
     * @type number
     * @memberof DefaultApigetCreditCardInvoicePayments
     */
    creditCardId: number
    /**
     * Invoice ID
     * @type number
     * @memberof DefaultApigetCreditCardInvoicePayments
     */
    invoiceId: number
}

export interface DefaultApiGetCreditCardInvoiceTransactionsRequest {
    /**
     * Credit card ID
     * @type number
     * @memberof DefaultApigetCreditCardInvoiceTransactions
     */
    creditCardId: number
    /**
     * Invoice ID
     * @type number
     * @memberof DefaultApigetCreditCardInvoiceTransactions
     */
    invoiceId: number
}

export interface DefaultApiGetCreditCardInvoicesRequest {
    /**
     * Credit card ID
     * @type number
     * @memberof DefaultApigetCreditCardInvoices
     */
    creditCardId: number
}

export interface DefaultApiGetCreditCardsRequest {
}

export interface DefaultApiGetTransactionRequest {
    /**
     * Transaction ID
     * @type number
     * @memberof DefaultApigetTransaction
     */
    transactionId: number
}

export interface DefaultApiGetTransactionsRequest {
    /**
     * Account ID
     * @type number
     * @memberof DefaultApigetTransactions
     */
    accountId: number
    /**
     * Start date (format: YYYY-MM-DD)
     * @type string
     * @memberof DefaultApigetTransactions
     */
    startDate?: string
    /**
     * End date (format: YYYY-MM-DD)
     * @type string
     * @memberof DefaultApigetTransactions
     */
    endDate?: string
}

export interface DefaultApiGetUserRequest {
    /**
     * User ID
     * @type number
     * @memberof DefaultApigetUser
     */
    userId: number
}

export interface DefaultApiUpdateAccountRequest {
    /**
     * Account ID
     * @type number
     * @memberof DefaultApiupdateAccount
     */
    accountId: number
    /**
     * 
     * @type Account
     * @memberof DefaultApiupdateAccount
     */
    account: Account
}

export interface DefaultApiUpdateCategoryRequest {
    /**
     * Category ID
     * @type number
     * @memberof DefaultApiupdateCategory
     */
    categoryId: number
    /**
     * 
     * @type Category
     * @memberof DefaultApiupdateCategory
     */
    category: Category
}

export interface DefaultApiUpdateCreditCardRequest {
    /**
     * Credit card ID
     * @type number
     * @memberof DefaultApiupdateCreditCard
     */
    creditCardId: number
    /**
     * 
     * @type CreditCard
     * @memberof DefaultApiupdateCreditCard
     */
    creditCard: CreditCard
}

export interface DefaultApiUpdateTransactionRequest {
    /**
     * Transaction ID
     * @type number
     * @memberof DefaultApiupdateTransaction
     */
    transactionId: number
    /**
     * 
     * @type Transaction
     * @memberof DefaultApiupdateTransaction
     */
    transaction: Transaction
}

export class ObjectDefaultApi {
    private api: ObservableDefaultApi

    public constructor(configuration: Configuration, requestFactory?: DefaultApiRequestFactory, responseProcessor?: DefaultApiResponseProcessor) {
        this.api = new ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create bank account
     * @param param the request object
     */
    public createAccountWithHttpInfo(param: DefaultApiCreateAccountRequest, options?: Configuration): Promise<HttpInfo<Account>> {
        return this.api.createAccountWithHttpInfo(param.account,  options).toPromise();
    }

    /**
     * Create bank account
     * @param param the request object
     */
    public createAccount(param: DefaultApiCreateAccountRequest, options?: Configuration): Promise<Account> {
        return this.api.createAccount(param.account,  options).toPromise();
    }

    /**
     * Create category
     * @param param the request object
     */
    public createCategoryWithHttpInfo(param: DefaultApiCreateCategoryRequest, options?: Configuration): Promise<HttpInfo<Category>> {
        return this.api.createCategoryWithHttpInfo(param.category,  options).toPromise();
    }

    /**
     * Create category
     * @param param the request object
     */
    public createCategory(param: DefaultApiCreateCategoryRequest, options?: Configuration): Promise<Category> {
        return this.api.createCategory(param.category,  options).toPromise();
    }

    /**
     * Create a new credit card
     * @param param the request object
     */
    public createCreditCardWithHttpInfo(param: DefaultApiCreateCreditCardRequest, options?: Configuration): Promise<HttpInfo<CreditCard>> {
        return this.api.createCreditCardWithHttpInfo(param.creditCard,  options).toPromise();
    }

    /**
     * Create a new credit card
     * @param param the request object
     */
    public createCreditCard(param: DefaultApiCreateCreditCardRequest, options?: Configuration): Promise<CreditCard> {
        return this.api.createCreditCard(param.creditCard,  options).toPromise();
    }

    /**
     * Create transaction
     * @param param the request object
     */
    public createTransactionWithHttpInfo(param: DefaultApiCreateTransactionRequest, options?: Configuration): Promise<HttpInfo<Transaction>> {
        return this.api.createTransactionWithHttpInfo(param.transaction,  options).toPromise();
    }

    /**
     * Create transaction
     * @param param the request object
     */
    public createTransaction(param: DefaultApiCreateTransactionRequest, options?: Configuration): Promise<Transaction> {
        return this.api.createTransaction(param.transaction,  options).toPromise();
    }

    /**
     * Delete bank account
     * @param param the request object
     */
    public deleteAccountWithHttpInfo(param: DefaultApiDeleteAccountRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.deleteAccountWithHttpInfo(param.accountId,  options).toPromise();
    }

    /**
     * Delete bank account
     * @param param the request object
     */
    public deleteAccount(param: DefaultApiDeleteAccountRequest, options?: Configuration): Promise<void> {
        return this.api.deleteAccount(param.accountId,  options).toPromise();
    }

    /**
     * Delete category
     * @param param the request object
     */
    public deleteCategoryWithHttpInfo(param: DefaultApiDeleteCategoryRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.deleteCategoryWithHttpInfo(param.categoryId,  options).toPromise();
    }

    /**
     * Delete category
     * @param param the request object
     */
    public deleteCategory(param: DefaultApiDeleteCategoryRequest, options?: Configuration): Promise<void> {
        return this.api.deleteCategory(param.categoryId,  options).toPromise();
    }

    /**
     * Delete credit card
     * @param param the request object
     */
    public deleteCreditCardWithHttpInfo(param: DefaultApiDeleteCreditCardRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.deleteCreditCardWithHttpInfo(param.creditCardId,  options).toPromise();
    }

    /**
     * Delete credit card
     * @param param the request object
     */
    public deleteCreditCard(param: DefaultApiDeleteCreditCardRequest, options?: Configuration): Promise<void> {
        return this.api.deleteCreditCard(param.creditCardId,  options).toPromise();
    }

    /**
     * Delete transaction
     * @param param the request object
     */
    public deleteTransactionWithHttpInfo(param: DefaultApiDeleteTransactionRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.deleteTransactionWithHttpInfo(param.transactionId,  options).toPromise();
    }

    /**
     * Delete transaction
     * @param param the request object
     */
    public deleteTransaction(param: DefaultApiDeleteTransactionRequest, options?: Configuration): Promise<void> {
        return this.api.deleteTransaction(param.transactionId,  options).toPromise();
    }

    /**
     * Get bank account details
     * @param param the request object
     */
    public getAccountWithHttpInfo(param: DefaultApiGetAccountRequest, options?: Configuration): Promise<HttpInfo<Account>> {
        return this.api.getAccountWithHttpInfo(param.accountId,  options).toPromise();
    }

    /**
     * Get bank account details
     * @param param the request object
     */
    public getAccount(param: DefaultApiGetAccountRequest, options?: Configuration): Promise<Account> {
        return this.api.getAccount(param.accountId,  options).toPromise();
    }

    /**
     * List bank accounts
     * @param param the request object
     */
    public getAccountsWithHttpInfo(param: DefaultApiGetAccountsRequest = {}, options?: Configuration): Promise<HttpInfo<Array<Account>>> {
        return this.api.getAccountsWithHttpInfo( options).toPromise();
    }

    /**
     * List bank accounts
     * @param param the request object
     */
    public getAccounts(param: DefaultApiGetAccountsRequest = {}, options?: Configuration): Promise<Array<Account>> {
        return this.api.getAccounts( options).toPromise();
    }

    /**
     * List budgets for the specified year
     * @param param the request object
     */
    public getBudgetsByYearWithHttpInfo(param: DefaultApiGetBudgetsByYearRequest, options?: Configuration): Promise<HttpInfo<Array<Budget>>> {
        return this.api.getBudgetsByYearWithHttpInfo(param.year,  options).toPromise();
    }

    /**
     * List budgets for the specified year
     * @param param the request object
     */
    public getBudgetsByYear(param: DefaultApiGetBudgetsByYearRequest, options?: Configuration): Promise<Array<Budget>> {
        return this.api.getBudgetsByYear(param.year,  options).toPromise();
    }

    /**
     * List budgets for the specified year and month
     * @param param the request object
     */
    public getBudgetsByYearAndMonthWithHttpInfo(param: DefaultApiGetBudgetsByYearAndMonthRequest, options?: Configuration): Promise<HttpInfo<Array<Budget>>> {
        return this.api.getBudgetsByYearAndMonthWithHttpInfo(param.year, param.month,  options).toPromise();
    }

    /**
     * List budgets for the specified year and month
     * @param param the request object
     */
    public getBudgetsByYearAndMonth(param: DefaultApiGetBudgetsByYearAndMonthRequest, options?: Configuration): Promise<Array<Budget>> {
        return this.api.getBudgetsByYearAndMonth(param.year, param.month,  options).toPromise();
    }

    /**
     * List categories
     * @param param the request object
     */
    public getCategoriesWithHttpInfo(param: DefaultApiGetCategoriesRequest = {}, options?: Configuration): Promise<HttpInfo<Array<Category>>> {
        return this.api.getCategoriesWithHttpInfo( options).toPromise();
    }

    /**
     * List categories
     * @param param the request object
     */
    public getCategories(param: DefaultApiGetCategoriesRequest = {}, options?: Configuration): Promise<Array<Category>> {
        return this.api.getCategories( options).toPromise();
    }

    /**
     * Get category details
     * @param param the request object
     */
    public getCategoryWithHttpInfo(param: DefaultApiGetCategoryRequest, options?: Configuration): Promise<HttpInfo<Category>> {
        return this.api.getCategoryWithHttpInfo(param.categoryId,  options).toPromise();
    }

    /**
     * Get category details
     * @param param the request object
     */
    public getCategory(param: DefaultApiGetCategoryRequest, options?: Configuration): Promise<Category> {
        return this.api.getCategory(param.categoryId,  options).toPromise();
    }

    /**
     * Get credit card details
     * @param param the request object
     */
    public getCreditCardWithHttpInfo(param: DefaultApiGetCreditCardRequest, options?: Configuration): Promise<HttpInfo<CreditCard>> {
        return this.api.getCreditCardWithHttpInfo(param.creditCardId,  options).toPromise();
    }

    /**
     * Get credit card details
     * @param param the request object
     */
    public getCreditCard(param: DefaultApiGetCreditCardRequest, options?: Configuration): Promise<CreditCard> {
        return this.api.getCreditCard(param.creditCardId,  options).toPromise();
    }

    /**
     * Get details of a credit card invoice
     * @param param the request object
     */
    public getCreditCardInvoiceWithHttpInfo(param: DefaultApiGetCreditCardInvoiceRequest, options?: Configuration): Promise<HttpInfo<Invoice>> {
        return this.api.getCreditCardInvoiceWithHttpInfo(param.creditCardId, param.invoiceId,  options).toPromise();
    }

    /**
     * Get details of a credit card invoice
     * @param param the request object
     */
    public getCreditCardInvoice(param: DefaultApiGetCreditCardInvoiceRequest, options?: Configuration): Promise<Invoice> {
        return this.api.getCreditCardInvoice(param.creditCardId, param.invoiceId,  options).toPromise();
    }

    /**
     * List payments for a credit card invoice
     * @param param the request object
     */
    public getCreditCardInvoicePaymentsWithHttpInfo(param: DefaultApiGetCreditCardInvoicePaymentsRequest, options?: Configuration): Promise<HttpInfo<PaymentDetails>> {
        return this.api.getCreditCardInvoicePaymentsWithHttpInfo(param.creditCardId, param.invoiceId,  options).toPromise();
    }

    /**
     * List payments for a credit card invoice
     * @param param the request object
     */
    public getCreditCardInvoicePayments(param: DefaultApiGetCreditCardInvoicePaymentsRequest, options?: Configuration): Promise<PaymentDetails> {
        return this.api.getCreditCardInvoicePayments(param.creditCardId, param.invoiceId,  options).toPromise();
    }

    /**
     * List transactions for a credit card invoice
     * @param param the request object
     */
    public getCreditCardInvoiceTransactionsWithHttpInfo(param: DefaultApiGetCreditCardInvoiceTransactionsRequest, options?: Configuration): Promise<HttpInfo<Array<TransactionDetails>>> {
        return this.api.getCreditCardInvoiceTransactionsWithHttpInfo(param.creditCardId, param.invoiceId,  options).toPromise();
    }

    /**
     * List transactions for a credit card invoice
     * @param param the request object
     */
    public getCreditCardInvoiceTransactions(param: DefaultApiGetCreditCardInvoiceTransactionsRequest, options?: Configuration): Promise<Array<TransactionDetails>> {
        return this.api.getCreditCardInvoiceTransactions(param.creditCardId, param.invoiceId,  options).toPromise();
    }

    /**
     * List invoices for a credit card
     * @param param the request object
     */
    public getCreditCardInvoicesWithHttpInfo(param: DefaultApiGetCreditCardInvoicesRequest, options?: Configuration): Promise<HttpInfo<Array<Invoice>>> {
        return this.api.getCreditCardInvoicesWithHttpInfo(param.creditCardId,  options).toPromise();
    }

    /**
     * List invoices for a credit card
     * @param param the request object
     */
    public getCreditCardInvoices(param: DefaultApiGetCreditCardInvoicesRequest, options?: Configuration): Promise<Array<Invoice>> {
        return this.api.getCreditCardInvoices(param.creditCardId,  options).toPromise();
    }

    /**
     * List credit cards
     * @param param the request object
     */
    public getCreditCardsWithHttpInfo(param: DefaultApiGetCreditCardsRequest = {}, options?: Configuration): Promise<HttpInfo<Array<CreditCard>>> {
        return this.api.getCreditCardsWithHttpInfo( options).toPromise();
    }

    /**
     * List credit cards
     * @param param the request object
     */
    public getCreditCards(param: DefaultApiGetCreditCardsRequest = {}, options?: Configuration): Promise<Array<CreditCard>> {
        return this.api.getCreditCards( options).toPromise();
    }

    /**
     * Get transaction details
     * @param param the request object
     */
    public getTransactionWithHttpInfo(param: DefaultApiGetTransactionRequest, options?: Configuration): Promise<HttpInfo<Transaction>> {
        return this.api.getTransactionWithHttpInfo(param.transactionId,  options).toPromise();
    }

    /**
     * Get transaction details
     * @param param the request object
     */
    public getTransaction(param: DefaultApiGetTransactionRequest, options?: Configuration): Promise<Transaction> {
        return this.api.getTransaction(param.transactionId,  options).toPromise();
    }

    /**
     * List transactions
     * @param param the request object
     */
    public getTransactionsWithHttpInfo(param: DefaultApiGetTransactionsRequest, options?: Configuration): Promise<HttpInfo<Array<Transaction>>> {
        return this.api.getTransactionsWithHttpInfo(param.accountId, param.startDate, param.endDate,  options).toPromise();
    }

    /**
     * List transactions
     * @param param the request object
     */
    public getTransactions(param: DefaultApiGetTransactionsRequest, options?: Configuration): Promise<Array<Transaction>> {
        return this.api.getTransactions(param.accountId, param.startDate, param.endDate,  options).toPromise();
    }

    /**
     * Get user details
     * @param param the request object
     */
    public getUserWithHttpInfo(param: DefaultApiGetUserRequest, options?: Configuration): Promise<HttpInfo<User>> {
        return this.api.getUserWithHttpInfo(param.userId,  options).toPromise();
    }

    /**
     * Get user details
     * @param param the request object
     */
    public getUser(param: DefaultApiGetUserRequest, options?: Configuration): Promise<User> {
        return this.api.getUser(param.userId,  options).toPromise();
    }

    /**
     * Update bank account
     * @param param the request object
     */
    public updateAccountWithHttpInfo(param: DefaultApiUpdateAccountRequest, options?: Configuration): Promise<HttpInfo<Account>> {
        return this.api.updateAccountWithHttpInfo(param.accountId, param.account,  options).toPromise();
    }

    /**
     * Update bank account
     * @param param the request object
     */
    public updateAccount(param: DefaultApiUpdateAccountRequest, options?: Configuration): Promise<Account> {
        return this.api.updateAccount(param.accountId, param.account,  options).toPromise();
    }

    /**
     * Update category
     * @param param the request object
     */
    public updateCategoryWithHttpInfo(param: DefaultApiUpdateCategoryRequest, options?: Configuration): Promise<HttpInfo<Category>> {
        return this.api.updateCategoryWithHttpInfo(param.categoryId, param.category,  options).toPromise();
    }

    /**
     * Update category
     * @param param the request object
     */
    public updateCategory(param: DefaultApiUpdateCategoryRequest, options?: Configuration): Promise<Category> {
        return this.api.updateCategory(param.categoryId, param.category,  options).toPromise();
    }

    /**
     * Update credit card details
     * @param param the request object
     */
    public updateCreditCardWithHttpInfo(param: DefaultApiUpdateCreditCardRequest, options?: Configuration): Promise<HttpInfo<CreditCard>> {
        return this.api.updateCreditCardWithHttpInfo(param.creditCardId, param.creditCard,  options).toPromise();
    }

    /**
     * Update credit card details
     * @param param the request object
     */
    public updateCreditCard(param: DefaultApiUpdateCreditCardRequest, options?: Configuration): Promise<CreditCard> {
        return this.api.updateCreditCard(param.creditCardId, param.creditCard,  options).toPromise();
    }

    /**
     * Update transaction
     * @param param the request object
     */
    public updateTransactionWithHttpInfo(param: DefaultApiUpdateTransactionRequest, options?: Configuration): Promise<HttpInfo<Transaction>> {
        return this.api.updateTransactionWithHttpInfo(param.transactionId, param.transaction,  options).toPromise();
    }

    /**
     * Update transaction
     * @param param the request object
     */
    public updateTransaction(param: DefaultApiUpdateTransactionRequest, options?: Configuration): Promise<Transaction> {
        return this.api.updateTransaction(param.transactionId, param.transaction,  options).toPromise();
    }

}
