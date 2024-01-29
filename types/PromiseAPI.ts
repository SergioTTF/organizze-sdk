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
import { ObservableDefaultApi } from './ObservableAPI';

import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";
export class PromiseDefaultApi {
    private api: ObservableDefaultApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DefaultApiRequestFactory,
        responseProcessor?: DefaultApiResponseProcessor
    ) {
        this.api = new ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create bank account
     * @param account 
     */
    public createAccountWithHttpInfo(account: Account, _options?: Configuration): Promise<HttpInfo<Account>> {
        const result = this.api.createAccountWithHttpInfo(account, _options);
        return result.toPromise();
    }

    /**
     * Create bank account
     * @param account 
     */
    public createAccount(account: Account, _options?: Configuration): Promise<Account> {
        const result = this.api.createAccount(account, _options);
        return result.toPromise();
    }

    /**
     * Create category
     * @param category 
     */
    public createCategoryWithHttpInfo(category: Category, _options?: Configuration): Promise<HttpInfo<Category>> {
        const result = this.api.createCategoryWithHttpInfo(category, _options);
        return result.toPromise();
    }

    /**
     * Create category
     * @param category 
     */
    public createCategory(category: Category, _options?: Configuration): Promise<Category> {
        const result = this.api.createCategory(category, _options);
        return result.toPromise();
    }

    /**
     * Create a new credit card
     * @param creditCard 
     */
    public createCreditCardWithHttpInfo(creditCard: CreditCard, _options?: Configuration): Promise<HttpInfo<CreditCard>> {
        const result = this.api.createCreditCardWithHttpInfo(creditCard, _options);
        return result.toPromise();
    }

    /**
     * Create a new credit card
     * @param creditCard 
     */
    public createCreditCard(creditCard: CreditCard, _options?: Configuration): Promise<CreditCard> {
        const result = this.api.createCreditCard(creditCard, _options);
        return result.toPromise();
    }

    /**
     * Create transaction
     * @param transaction 
     */
    public createTransactionWithHttpInfo(transaction: Transaction, _options?: Configuration): Promise<HttpInfo<Transaction>> {
        const result = this.api.createTransactionWithHttpInfo(transaction, _options);
        return result.toPromise();
    }

    /**
     * Create transaction
     * @param transaction 
     */
    public createTransaction(transaction: Transaction, _options?: Configuration): Promise<Transaction> {
        const result = this.api.createTransaction(transaction, _options);
        return result.toPromise();
    }

    /**
     * Delete bank account
     * @param accountId Account ID
     */
    public deleteAccountWithHttpInfo(accountId: number, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.deleteAccountWithHttpInfo(accountId, _options);
        return result.toPromise();
    }

    /**
     * Delete bank account
     * @param accountId Account ID
     */
    public deleteAccount(accountId: number, _options?: Configuration): Promise<void> {
        const result = this.api.deleteAccount(accountId, _options);
        return result.toPromise();
    }

    /**
     * Delete category
     * @param categoryId Category ID
     */
    public deleteCategoryWithHttpInfo(categoryId: number, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.deleteCategoryWithHttpInfo(categoryId, _options);
        return result.toPromise();
    }

    /**
     * Delete category
     * @param categoryId Category ID
     */
    public deleteCategory(categoryId: number, _options?: Configuration): Promise<void> {
        const result = this.api.deleteCategory(categoryId, _options);
        return result.toPromise();
    }

    /**
     * Delete credit card
     * @param creditCardId Credit card ID
     */
    public deleteCreditCardWithHttpInfo(creditCardId: number, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.deleteCreditCardWithHttpInfo(creditCardId, _options);
        return result.toPromise();
    }

    /**
     * Delete credit card
     * @param creditCardId Credit card ID
     */
    public deleteCreditCard(creditCardId: number, _options?: Configuration): Promise<void> {
        const result = this.api.deleteCreditCard(creditCardId, _options);
        return result.toPromise();
    }

    /**
     * Delete transaction
     * @param transactionId Transaction ID
     */
    public deleteTransactionWithHttpInfo(transactionId: number, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.deleteTransactionWithHttpInfo(transactionId, _options);
        return result.toPromise();
    }

    /**
     * Delete transaction
     * @param transactionId Transaction ID
     */
    public deleteTransaction(transactionId: number, _options?: Configuration): Promise<void> {
        const result = this.api.deleteTransaction(transactionId, _options);
        return result.toPromise();
    }

    /**
     * Get bank account details
     * @param accountId Account ID
     */
    public getAccountWithHttpInfo(accountId: number, _options?: Configuration): Promise<HttpInfo<Account>> {
        const result = this.api.getAccountWithHttpInfo(accountId, _options);
        return result.toPromise();
    }

    /**
     * Get bank account details
     * @param accountId Account ID
     */
    public getAccount(accountId: number, _options?: Configuration): Promise<Account> {
        const result = this.api.getAccount(accountId, _options);
        return result.toPromise();
    }

    /**
     * List bank accounts
     */
    public getAccountsWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<Account>>> {
        const result = this.api.getAccountsWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * List bank accounts
     */
    public getAccounts(_options?: Configuration): Promise<Array<Account>> {
        const result = this.api.getAccounts(_options);
        return result.toPromise();
    }

    /**
     * List budgets for the specified year
     * @param year Year for budgets
     */
    public getBudgetsByYearWithHttpInfo(year: number, _options?: Configuration): Promise<HttpInfo<Array<Budget>>> {
        const result = this.api.getBudgetsByYearWithHttpInfo(year, _options);
        return result.toPromise();
    }

    /**
     * List budgets for the specified year
     * @param year Year for budgets
     */
    public getBudgetsByYear(year: number, _options?: Configuration): Promise<Array<Budget>> {
        const result = this.api.getBudgetsByYear(year, _options);
        return result.toPromise();
    }

    /**
     * List budgets for the specified year and month
     * @param year Year for budgets
     * @param month Month for budgets
     */
    public getBudgetsByYearAndMonthWithHttpInfo(year: number, month: number, _options?: Configuration): Promise<HttpInfo<Array<Budget>>> {
        const result = this.api.getBudgetsByYearAndMonthWithHttpInfo(year, month, _options);
        return result.toPromise();
    }

    /**
     * List budgets for the specified year and month
     * @param year Year for budgets
     * @param month Month for budgets
     */
    public getBudgetsByYearAndMonth(year: number, month: number, _options?: Configuration): Promise<Array<Budget>> {
        const result = this.api.getBudgetsByYearAndMonth(year, month, _options);
        return result.toPromise();
    }

    /**
     * List categories
     */
    public getCategoriesWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<Category>>> {
        const result = this.api.getCategoriesWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * List categories
     */
    public getCategories(_options?: Configuration): Promise<Array<Category>> {
        const result = this.api.getCategories(_options);
        return result.toPromise();
    }

    /**
     * Get category details
     * @param categoryId Category ID
     */
    public getCategoryWithHttpInfo(categoryId: number, _options?: Configuration): Promise<HttpInfo<Category>> {
        const result = this.api.getCategoryWithHttpInfo(categoryId, _options);
        return result.toPromise();
    }

    /**
     * Get category details
     * @param categoryId Category ID
     */
    public getCategory(categoryId: number, _options?: Configuration): Promise<Category> {
        const result = this.api.getCategory(categoryId, _options);
        return result.toPromise();
    }

    /**
     * Get credit card details
     * @param creditCardId Credit card ID
     */
    public getCreditCardWithHttpInfo(creditCardId: number, _options?: Configuration): Promise<HttpInfo<CreditCard>> {
        const result = this.api.getCreditCardWithHttpInfo(creditCardId, _options);
        return result.toPromise();
    }

    /**
     * Get credit card details
     * @param creditCardId Credit card ID
     */
    public getCreditCard(creditCardId: number, _options?: Configuration): Promise<CreditCard> {
        const result = this.api.getCreditCard(creditCardId, _options);
        return result.toPromise();
    }

    /**
     * Get details of a credit card invoice
     * @param creditCardId Credit card ID
     * @param invoiceId Invoice ID
     */
    public getCreditCardInvoiceWithHttpInfo(creditCardId: number, invoiceId: number, _options?: Configuration): Promise<HttpInfo<Invoice>> {
        const result = this.api.getCreditCardInvoiceWithHttpInfo(creditCardId, invoiceId, _options);
        return result.toPromise();
    }

    /**
     * Get details of a credit card invoice
     * @param creditCardId Credit card ID
     * @param invoiceId Invoice ID
     */
    public getCreditCardInvoice(creditCardId: number, invoiceId: number, _options?: Configuration): Promise<Invoice> {
        const result = this.api.getCreditCardInvoice(creditCardId, invoiceId, _options);
        return result.toPromise();
    }

    /**
     * List payments for a credit card invoice
     * @param creditCardId Credit card ID
     * @param invoiceId Invoice ID
     */
    public getCreditCardInvoicePaymentsWithHttpInfo(creditCardId: number, invoiceId: number, _options?: Configuration): Promise<HttpInfo<PaymentDetails>> {
        const result = this.api.getCreditCardInvoicePaymentsWithHttpInfo(creditCardId, invoiceId, _options);
        return result.toPromise();
    }

    /**
     * List payments for a credit card invoice
     * @param creditCardId Credit card ID
     * @param invoiceId Invoice ID
     */
    public getCreditCardInvoicePayments(creditCardId: number, invoiceId: number, _options?: Configuration): Promise<PaymentDetails> {
        const result = this.api.getCreditCardInvoicePayments(creditCardId, invoiceId, _options);
        return result.toPromise();
    }

    /**
     * List transactions for a credit card invoice
     * @param creditCardId Credit card ID
     * @param invoiceId Invoice ID
     */
    public getCreditCardInvoiceTransactionsWithHttpInfo(creditCardId: number, invoiceId: number, _options?: Configuration): Promise<HttpInfo<Array<TransactionDetails>>> {
        const result = this.api.getCreditCardInvoiceTransactionsWithHttpInfo(creditCardId, invoiceId, _options);
        return result.toPromise();
    }

    /**
     * List transactions for a credit card invoice
     * @param creditCardId Credit card ID
     * @param invoiceId Invoice ID
     */
    public getCreditCardInvoiceTransactions(creditCardId: number, invoiceId: number, _options?: Configuration): Promise<Array<TransactionDetails>> {
        const result = this.api.getCreditCardInvoiceTransactions(creditCardId, invoiceId, _options);
        return result.toPromise();
    }

    /**
     * List invoices for a credit card
     * @param creditCardId Credit card ID
     */
    public getCreditCardInvoicesWithHttpInfo(creditCardId: number, _options?: Configuration): Promise<HttpInfo<Array<Invoice>>> {
        const result = this.api.getCreditCardInvoicesWithHttpInfo(creditCardId, _options);
        return result.toPromise();
    }

    /**
     * List invoices for a credit card
     * @param creditCardId Credit card ID
     */
    public getCreditCardInvoices(creditCardId: number, _options?: Configuration): Promise<Array<Invoice>> {
        const result = this.api.getCreditCardInvoices(creditCardId, _options);
        return result.toPromise();
    }

    /**
     * List credit cards
     */
    public getCreditCardsWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<CreditCard>>> {
        const result = this.api.getCreditCardsWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * List credit cards
     */
    public getCreditCards(_options?: Configuration): Promise<Array<CreditCard>> {
        const result = this.api.getCreditCards(_options);
        return result.toPromise();
    }

    /**
     * Get transaction details
     * @param transactionId Transaction ID
     */
    public getTransactionWithHttpInfo(transactionId: number, _options?: Configuration): Promise<HttpInfo<Transaction>> {
        const result = this.api.getTransactionWithHttpInfo(transactionId, _options);
        return result.toPromise();
    }

    /**
     * Get transaction details
     * @param transactionId Transaction ID
     */
    public getTransaction(transactionId: number, _options?: Configuration): Promise<Transaction> {
        const result = this.api.getTransaction(transactionId, _options);
        return result.toPromise();
    }

    /**
     * List transactions
     * @param accountId Account ID
     * @param startDate Start date (format: YYYY-MM-DD)
     * @param endDate End date (format: YYYY-MM-DD)
     */
    public getTransactionsWithHttpInfo(accountId: number, startDate?: string, endDate?: string, _options?: Configuration): Promise<HttpInfo<Array<Transaction>>> {
        const result = this.api.getTransactionsWithHttpInfo(accountId, startDate, endDate, _options);
        return result.toPromise();
    }

    /**
     * List transactions
     * @param accountId Account ID
     * @param startDate Start date (format: YYYY-MM-DD)
     * @param endDate End date (format: YYYY-MM-DD)
     */
    public getTransactions(accountId: number, startDate?: string, endDate?: string, _options?: Configuration): Promise<Array<Transaction>> {
        const result = this.api.getTransactions(accountId, startDate, endDate, _options);
        return result.toPromise();
    }

    /**
     * Get user details
     * @param userId User ID
     */
    public getUserWithHttpInfo(userId: number, _options?: Configuration): Promise<HttpInfo<User>> {
        const result = this.api.getUserWithHttpInfo(userId, _options);
        return result.toPromise();
    }

    /**
     * Get user details
     * @param userId User ID
     */
    public getUser(userId: number, _options?: Configuration): Promise<User> {
        const result = this.api.getUser(userId, _options);
        return result.toPromise();
    }

    /**
     * Update bank account
     * @param accountId Account ID
     * @param account 
     */
    public updateAccountWithHttpInfo(accountId: number, account: Account, _options?: Configuration): Promise<HttpInfo<Account>> {
        const result = this.api.updateAccountWithHttpInfo(accountId, account, _options);
        return result.toPromise();
    }

    /**
     * Update bank account
     * @param accountId Account ID
     * @param account 
     */
    public updateAccount(accountId: number, account: Account, _options?: Configuration): Promise<Account> {
        const result = this.api.updateAccount(accountId, account, _options);
        return result.toPromise();
    }

    /**
     * Update category
     * @param categoryId Category ID
     * @param category 
     */
    public updateCategoryWithHttpInfo(categoryId: number, category: Category, _options?: Configuration): Promise<HttpInfo<Category>> {
        const result = this.api.updateCategoryWithHttpInfo(categoryId, category, _options);
        return result.toPromise();
    }

    /**
     * Update category
     * @param categoryId Category ID
     * @param category 
     */
    public updateCategory(categoryId: number, category: Category, _options?: Configuration): Promise<Category> {
        const result = this.api.updateCategory(categoryId, category, _options);
        return result.toPromise();
    }

    /**
     * Update credit card details
     * @param creditCardId Credit card ID
     * @param creditCard 
     */
    public updateCreditCardWithHttpInfo(creditCardId: number, creditCard: CreditCard, _options?: Configuration): Promise<HttpInfo<CreditCard>> {
        const result = this.api.updateCreditCardWithHttpInfo(creditCardId, creditCard, _options);
        return result.toPromise();
    }

    /**
     * Update credit card details
     * @param creditCardId Credit card ID
     * @param creditCard 
     */
    public updateCreditCard(creditCardId: number, creditCard: CreditCard, _options?: Configuration): Promise<CreditCard> {
        const result = this.api.updateCreditCard(creditCardId, creditCard, _options);
        return result.toPromise();
    }

    /**
     * Update transaction
     * @param transactionId Transaction ID
     * @param transaction 
     */
    public updateTransactionWithHttpInfo(transactionId: number, transaction: Transaction, _options?: Configuration): Promise<HttpInfo<Transaction>> {
        const result = this.api.updateTransactionWithHttpInfo(transactionId, transaction, _options);
        return result.toPromise();
    }

    /**
     * Update transaction
     * @param transactionId Transaction ID
     * @param transaction 
     */
    public updateTransaction(transactionId: number, transaction: Transaction, _options?: Configuration): Promise<Transaction> {
        const result = this.api.updateTransaction(transactionId, transaction, _options);
        return result.toPromise();
    }


}



