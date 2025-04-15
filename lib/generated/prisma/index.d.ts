
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model PipelineRun
 * 
 */
export type PipelineRun = $Result.DefaultSelection<Prisma.$PipelineRunPayload>
/**
 * Model ActivityRun
 * 
 */
export type ActivityRun = $Result.DefaultSelection<Prisma.$ActivityRunPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more PipelineRuns
 * const pipelineRuns = await prisma.pipelineRun.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more PipelineRuns
   * const pipelineRuns = await prisma.pipelineRun.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.pipelineRun`: Exposes CRUD operations for the **PipelineRun** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PipelineRuns
    * const pipelineRuns = await prisma.pipelineRun.findMany()
    * ```
    */
  get pipelineRun(): Prisma.PipelineRunDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.activityRun`: Exposes CRUD operations for the **ActivityRun** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ActivityRuns
    * const activityRuns = await prisma.activityRun.findMany()
    * ```
    */
  get activityRun(): Prisma.ActivityRunDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    PipelineRun: 'PipelineRun',
    ActivityRun: 'ActivityRun'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "pipelineRun" | "activityRun"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      PipelineRun: {
        payload: Prisma.$PipelineRunPayload<ExtArgs>
        fields: Prisma.PipelineRunFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PipelineRunFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PipelineRunPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PipelineRunFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PipelineRunPayload>
          }
          findFirst: {
            args: Prisma.PipelineRunFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PipelineRunPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PipelineRunFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PipelineRunPayload>
          }
          findMany: {
            args: Prisma.PipelineRunFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PipelineRunPayload>[]
          }
          create: {
            args: Prisma.PipelineRunCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PipelineRunPayload>
          }
          createMany: {
            args: Prisma.PipelineRunCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PipelineRunCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PipelineRunPayload>[]
          }
          delete: {
            args: Prisma.PipelineRunDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PipelineRunPayload>
          }
          update: {
            args: Prisma.PipelineRunUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PipelineRunPayload>
          }
          deleteMany: {
            args: Prisma.PipelineRunDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PipelineRunUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PipelineRunUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PipelineRunPayload>[]
          }
          upsert: {
            args: Prisma.PipelineRunUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PipelineRunPayload>
          }
          aggregate: {
            args: Prisma.PipelineRunAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePipelineRun>
          }
          groupBy: {
            args: Prisma.PipelineRunGroupByArgs<ExtArgs>
            result: $Utils.Optional<PipelineRunGroupByOutputType>[]
          }
          count: {
            args: Prisma.PipelineRunCountArgs<ExtArgs>
            result: $Utils.Optional<PipelineRunCountAggregateOutputType> | number
          }
        }
      }
      ActivityRun: {
        payload: Prisma.$ActivityRunPayload<ExtArgs>
        fields: Prisma.ActivityRunFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ActivityRunFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityRunPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ActivityRunFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityRunPayload>
          }
          findFirst: {
            args: Prisma.ActivityRunFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityRunPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ActivityRunFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityRunPayload>
          }
          findMany: {
            args: Prisma.ActivityRunFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityRunPayload>[]
          }
          create: {
            args: Prisma.ActivityRunCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityRunPayload>
          }
          createMany: {
            args: Prisma.ActivityRunCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ActivityRunCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityRunPayload>[]
          }
          delete: {
            args: Prisma.ActivityRunDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityRunPayload>
          }
          update: {
            args: Prisma.ActivityRunUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityRunPayload>
          }
          deleteMany: {
            args: Prisma.ActivityRunDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ActivityRunUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ActivityRunUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityRunPayload>[]
          }
          upsert: {
            args: Prisma.ActivityRunUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityRunPayload>
          }
          aggregate: {
            args: Prisma.ActivityRunAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateActivityRun>
          }
          groupBy: {
            args: Prisma.ActivityRunGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActivityRunGroupByOutputType>[]
          }
          count: {
            args: Prisma.ActivityRunCountArgs<ExtArgs>
            result: $Utils.Optional<ActivityRunCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    pipelineRun?: PipelineRunOmit
    activityRun?: ActivityRunOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type PipelineRunCountOutputType
   */

  export type PipelineRunCountOutputType = {
    activities: number
  }

  export type PipelineRunCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activities?: boolean | PipelineRunCountOutputTypeCountActivitiesArgs
  }

  // Custom InputTypes
  /**
   * PipelineRunCountOutputType without action
   */
  export type PipelineRunCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PipelineRunCountOutputType
     */
    select?: PipelineRunCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PipelineRunCountOutputType without action
   */
  export type PipelineRunCountOutputTypeCountActivitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityRunWhereInput
  }


  /**
   * Models
   */

  /**
   * Model PipelineRun
   */

  export type AggregatePipelineRun = {
    _count: PipelineRunCountAggregateOutputType | null
    _avg: PipelineRunAvgAggregateOutputType | null
    _sum: PipelineRunSumAggregateOutputType | null
    _min: PipelineRunMinAggregateOutputType | null
    _max: PipelineRunMaxAggregateOutputType | null
  }

  export type PipelineRunAvgAggregateOutputType = {
    duration: number | null
    dataVolume: number | null
  }

  export type PipelineRunSumAggregateOutputType = {
    duration: number | null
    dataVolume: number | null
  }

  export type PipelineRunMinAggregateOutputType = {
    id: string | null
    pipelineName: string | null
    runStatus: string | null
    startTime: Date | null
    endTime: Date | null
    duration: number | null
    triggerType: string | null
    dataVolume: number | null
    failureReason: string | null
    createdAt: Date | null
  }

  export type PipelineRunMaxAggregateOutputType = {
    id: string | null
    pipelineName: string | null
    runStatus: string | null
    startTime: Date | null
    endTime: Date | null
    duration: number | null
    triggerType: string | null
    dataVolume: number | null
    failureReason: string | null
    createdAt: Date | null
  }

  export type PipelineRunCountAggregateOutputType = {
    id: number
    pipelineName: number
    runStatus: number
    startTime: number
    endTime: number
    duration: number
    triggerType: number
    parameters: number
    dataVolume: number
    failureReason: number
    createdAt: number
    _all: number
  }


  export type PipelineRunAvgAggregateInputType = {
    duration?: true
    dataVolume?: true
  }

  export type PipelineRunSumAggregateInputType = {
    duration?: true
    dataVolume?: true
  }

  export type PipelineRunMinAggregateInputType = {
    id?: true
    pipelineName?: true
    runStatus?: true
    startTime?: true
    endTime?: true
    duration?: true
    triggerType?: true
    dataVolume?: true
    failureReason?: true
    createdAt?: true
  }

  export type PipelineRunMaxAggregateInputType = {
    id?: true
    pipelineName?: true
    runStatus?: true
    startTime?: true
    endTime?: true
    duration?: true
    triggerType?: true
    dataVolume?: true
    failureReason?: true
    createdAt?: true
  }

  export type PipelineRunCountAggregateInputType = {
    id?: true
    pipelineName?: true
    runStatus?: true
    startTime?: true
    endTime?: true
    duration?: true
    triggerType?: true
    parameters?: true
    dataVolume?: true
    failureReason?: true
    createdAt?: true
    _all?: true
  }

  export type PipelineRunAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PipelineRun to aggregate.
     */
    where?: PipelineRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PipelineRuns to fetch.
     */
    orderBy?: PipelineRunOrderByWithRelationInput | PipelineRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PipelineRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PipelineRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PipelineRuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PipelineRuns
    **/
    _count?: true | PipelineRunCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PipelineRunAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PipelineRunSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PipelineRunMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PipelineRunMaxAggregateInputType
  }

  export type GetPipelineRunAggregateType<T extends PipelineRunAggregateArgs> = {
        [P in keyof T & keyof AggregatePipelineRun]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePipelineRun[P]>
      : GetScalarType<T[P], AggregatePipelineRun[P]>
  }




  export type PipelineRunGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PipelineRunWhereInput
    orderBy?: PipelineRunOrderByWithAggregationInput | PipelineRunOrderByWithAggregationInput[]
    by: PipelineRunScalarFieldEnum[] | PipelineRunScalarFieldEnum
    having?: PipelineRunScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PipelineRunCountAggregateInputType | true
    _avg?: PipelineRunAvgAggregateInputType
    _sum?: PipelineRunSumAggregateInputType
    _min?: PipelineRunMinAggregateInputType
    _max?: PipelineRunMaxAggregateInputType
  }

  export type PipelineRunGroupByOutputType = {
    id: string
    pipelineName: string
    runStatus: string
    startTime: Date
    endTime: Date
    duration: number
    triggerType: string
    parameters: JsonValue
    dataVolume: number | null
    failureReason: string | null
    createdAt: Date
    _count: PipelineRunCountAggregateOutputType | null
    _avg: PipelineRunAvgAggregateOutputType | null
    _sum: PipelineRunSumAggregateOutputType | null
    _min: PipelineRunMinAggregateOutputType | null
    _max: PipelineRunMaxAggregateOutputType | null
  }

  type GetPipelineRunGroupByPayload<T extends PipelineRunGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PipelineRunGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PipelineRunGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PipelineRunGroupByOutputType[P]>
            : GetScalarType<T[P], PipelineRunGroupByOutputType[P]>
        }
      >
    >


  export type PipelineRunSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pipelineName?: boolean
    runStatus?: boolean
    startTime?: boolean
    endTime?: boolean
    duration?: boolean
    triggerType?: boolean
    parameters?: boolean
    dataVolume?: boolean
    failureReason?: boolean
    createdAt?: boolean
    activities?: boolean | PipelineRun$activitiesArgs<ExtArgs>
    _count?: boolean | PipelineRunCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pipelineRun"]>

  export type PipelineRunSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pipelineName?: boolean
    runStatus?: boolean
    startTime?: boolean
    endTime?: boolean
    duration?: boolean
    triggerType?: boolean
    parameters?: boolean
    dataVolume?: boolean
    failureReason?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["pipelineRun"]>

  export type PipelineRunSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pipelineName?: boolean
    runStatus?: boolean
    startTime?: boolean
    endTime?: boolean
    duration?: boolean
    triggerType?: boolean
    parameters?: boolean
    dataVolume?: boolean
    failureReason?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["pipelineRun"]>

  export type PipelineRunSelectScalar = {
    id?: boolean
    pipelineName?: boolean
    runStatus?: boolean
    startTime?: boolean
    endTime?: boolean
    duration?: boolean
    triggerType?: boolean
    parameters?: boolean
    dataVolume?: boolean
    failureReason?: boolean
    createdAt?: boolean
  }

  export type PipelineRunOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "pipelineName" | "runStatus" | "startTime" | "endTime" | "duration" | "triggerType" | "parameters" | "dataVolume" | "failureReason" | "createdAt", ExtArgs["result"]["pipelineRun"]>
  export type PipelineRunInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activities?: boolean | PipelineRun$activitiesArgs<ExtArgs>
    _count?: boolean | PipelineRunCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PipelineRunIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PipelineRunIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PipelineRunPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PipelineRun"
    objects: {
      activities: Prisma.$ActivityRunPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      pipelineName: string
      runStatus: string
      startTime: Date
      endTime: Date
      duration: number
      triggerType: string
      parameters: Prisma.JsonValue
      dataVolume: number | null
      failureReason: string | null
      createdAt: Date
    }, ExtArgs["result"]["pipelineRun"]>
    composites: {}
  }

  type PipelineRunGetPayload<S extends boolean | null | undefined | PipelineRunDefaultArgs> = $Result.GetResult<Prisma.$PipelineRunPayload, S>

  type PipelineRunCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PipelineRunFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PipelineRunCountAggregateInputType | true
    }

  export interface PipelineRunDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PipelineRun'], meta: { name: 'PipelineRun' } }
    /**
     * Find zero or one PipelineRun that matches the filter.
     * @param {PipelineRunFindUniqueArgs} args - Arguments to find a PipelineRun
     * @example
     * // Get one PipelineRun
     * const pipelineRun = await prisma.pipelineRun.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PipelineRunFindUniqueArgs>(args: SelectSubset<T, PipelineRunFindUniqueArgs<ExtArgs>>): Prisma__PipelineRunClient<$Result.GetResult<Prisma.$PipelineRunPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PipelineRun that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PipelineRunFindUniqueOrThrowArgs} args - Arguments to find a PipelineRun
     * @example
     * // Get one PipelineRun
     * const pipelineRun = await prisma.pipelineRun.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PipelineRunFindUniqueOrThrowArgs>(args: SelectSubset<T, PipelineRunFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PipelineRunClient<$Result.GetResult<Prisma.$PipelineRunPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PipelineRun that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PipelineRunFindFirstArgs} args - Arguments to find a PipelineRun
     * @example
     * // Get one PipelineRun
     * const pipelineRun = await prisma.pipelineRun.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PipelineRunFindFirstArgs>(args?: SelectSubset<T, PipelineRunFindFirstArgs<ExtArgs>>): Prisma__PipelineRunClient<$Result.GetResult<Prisma.$PipelineRunPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PipelineRun that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PipelineRunFindFirstOrThrowArgs} args - Arguments to find a PipelineRun
     * @example
     * // Get one PipelineRun
     * const pipelineRun = await prisma.pipelineRun.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PipelineRunFindFirstOrThrowArgs>(args?: SelectSubset<T, PipelineRunFindFirstOrThrowArgs<ExtArgs>>): Prisma__PipelineRunClient<$Result.GetResult<Prisma.$PipelineRunPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PipelineRuns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PipelineRunFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PipelineRuns
     * const pipelineRuns = await prisma.pipelineRun.findMany()
     * 
     * // Get first 10 PipelineRuns
     * const pipelineRuns = await prisma.pipelineRun.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pipelineRunWithIdOnly = await prisma.pipelineRun.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PipelineRunFindManyArgs>(args?: SelectSubset<T, PipelineRunFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PipelineRunPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PipelineRun.
     * @param {PipelineRunCreateArgs} args - Arguments to create a PipelineRun.
     * @example
     * // Create one PipelineRun
     * const PipelineRun = await prisma.pipelineRun.create({
     *   data: {
     *     // ... data to create a PipelineRun
     *   }
     * })
     * 
     */
    create<T extends PipelineRunCreateArgs>(args: SelectSubset<T, PipelineRunCreateArgs<ExtArgs>>): Prisma__PipelineRunClient<$Result.GetResult<Prisma.$PipelineRunPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PipelineRuns.
     * @param {PipelineRunCreateManyArgs} args - Arguments to create many PipelineRuns.
     * @example
     * // Create many PipelineRuns
     * const pipelineRun = await prisma.pipelineRun.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PipelineRunCreateManyArgs>(args?: SelectSubset<T, PipelineRunCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PipelineRuns and returns the data saved in the database.
     * @param {PipelineRunCreateManyAndReturnArgs} args - Arguments to create many PipelineRuns.
     * @example
     * // Create many PipelineRuns
     * const pipelineRun = await prisma.pipelineRun.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PipelineRuns and only return the `id`
     * const pipelineRunWithIdOnly = await prisma.pipelineRun.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PipelineRunCreateManyAndReturnArgs>(args?: SelectSubset<T, PipelineRunCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PipelineRunPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PipelineRun.
     * @param {PipelineRunDeleteArgs} args - Arguments to delete one PipelineRun.
     * @example
     * // Delete one PipelineRun
     * const PipelineRun = await prisma.pipelineRun.delete({
     *   where: {
     *     // ... filter to delete one PipelineRun
     *   }
     * })
     * 
     */
    delete<T extends PipelineRunDeleteArgs>(args: SelectSubset<T, PipelineRunDeleteArgs<ExtArgs>>): Prisma__PipelineRunClient<$Result.GetResult<Prisma.$PipelineRunPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PipelineRun.
     * @param {PipelineRunUpdateArgs} args - Arguments to update one PipelineRun.
     * @example
     * // Update one PipelineRun
     * const pipelineRun = await prisma.pipelineRun.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PipelineRunUpdateArgs>(args: SelectSubset<T, PipelineRunUpdateArgs<ExtArgs>>): Prisma__PipelineRunClient<$Result.GetResult<Prisma.$PipelineRunPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PipelineRuns.
     * @param {PipelineRunDeleteManyArgs} args - Arguments to filter PipelineRuns to delete.
     * @example
     * // Delete a few PipelineRuns
     * const { count } = await prisma.pipelineRun.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PipelineRunDeleteManyArgs>(args?: SelectSubset<T, PipelineRunDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PipelineRuns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PipelineRunUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PipelineRuns
     * const pipelineRun = await prisma.pipelineRun.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PipelineRunUpdateManyArgs>(args: SelectSubset<T, PipelineRunUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PipelineRuns and returns the data updated in the database.
     * @param {PipelineRunUpdateManyAndReturnArgs} args - Arguments to update many PipelineRuns.
     * @example
     * // Update many PipelineRuns
     * const pipelineRun = await prisma.pipelineRun.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PipelineRuns and only return the `id`
     * const pipelineRunWithIdOnly = await prisma.pipelineRun.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PipelineRunUpdateManyAndReturnArgs>(args: SelectSubset<T, PipelineRunUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PipelineRunPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PipelineRun.
     * @param {PipelineRunUpsertArgs} args - Arguments to update or create a PipelineRun.
     * @example
     * // Update or create a PipelineRun
     * const pipelineRun = await prisma.pipelineRun.upsert({
     *   create: {
     *     // ... data to create a PipelineRun
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PipelineRun we want to update
     *   }
     * })
     */
    upsert<T extends PipelineRunUpsertArgs>(args: SelectSubset<T, PipelineRunUpsertArgs<ExtArgs>>): Prisma__PipelineRunClient<$Result.GetResult<Prisma.$PipelineRunPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PipelineRuns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PipelineRunCountArgs} args - Arguments to filter PipelineRuns to count.
     * @example
     * // Count the number of PipelineRuns
     * const count = await prisma.pipelineRun.count({
     *   where: {
     *     // ... the filter for the PipelineRuns we want to count
     *   }
     * })
    **/
    count<T extends PipelineRunCountArgs>(
      args?: Subset<T, PipelineRunCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PipelineRunCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PipelineRun.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PipelineRunAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PipelineRunAggregateArgs>(args: Subset<T, PipelineRunAggregateArgs>): Prisma.PrismaPromise<GetPipelineRunAggregateType<T>>

    /**
     * Group by PipelineRun.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PipelineRunGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PipelineRunGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PipelineRunGroupByArgs['orderBy'] }
        : { orderBy?: PipelineRunGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PipelineRunGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPipelineRunGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PipelineRun model
   */
  readonly fields: PipelineRunFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PipelineRun.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PipelineRunClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    activities<T extends PipelineRun$activitiesArgs<ExtArgs> = {}>(args?: Subset<T, PipelineRun$activitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityRunPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PipelineRun model
   */
  interface PipelineRunFieldRefs {
    readonly id: FieldRef<"PipelineRun", 'String'>
    readonly pipelineName: FieldRef<"PipelineRun", 'String'>
    readonly runStatus: FieldRef<"PipelineRun", 'String'>
    readonly startTime: FieldRef<"PipelineRun", 'DateTime'>
    readonly endTime: FieldRef<"PipelineRun", 'DateTime'>
    readonly duration: FieldRef<"PipelineRun", 'Int'>
    readonly triggerType: FieldRef<"PipelineRun", 'String'>
    readonly parameters: FieldRef<"PipelineRun", 'Json'>
    readonly dataVolume: FieldRef<"PipelineRun", 'Float'>
    readonly failureReason: FieldRef<"PipelineRun", 'String'>
    readonly createdAt: FieldRef<"PipelineRun", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PipelineRun findUnique
   */
  export type PipelineRunFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PipelineRun
     */
    select?: PipelineRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PipelineRun
     */
    omit?: PipelineRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PipelineRunInclude<ExtArgs> | null
    /**
     * Filter, which PipelineRun to fetch.
     */
    where: PipelineRunWhereUniqueInput
  }

  /**
   * PipelineRun findUniqueOrThrow
   */
  export type PipelineRunFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PipelineRun
     */
    select?: PipelineRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PipelineRun
     */
    omit?: PipelineRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PipelineRunInclude<ExtArgs> | null
    /**
     * Filter, which PipelineRun to fetch.
     */
    where: PipelineRunWhereUniqueInput
  }

  /**
   * PipelineRun findFirst
   */
  export type PipelineRunFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PipelineRun
     */
    select?: PipelineRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PipelineRun
     */
    omit?: PipelineRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PipelineRunInclude<ExtArgs> | null
    /**
     * Filter, which PipelineRun to fetch.
     */
    where?: PipelineRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PipelineRuns to fetch.
     */
    orderBy?: PipelineRunOrderByWithRelationInput | PipelineRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PipelineRuns.
     */
    cursor?: PipelineRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PipelineRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PipelineRuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PipelineRuns.
     */
    distinct?: PipelineRunScalarFieldEnum | PipelineRunScalarFieldEnum[]
  }

  /**
   * PipelineRun findFirstOrThrow
   */
  export type PipelineRunFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PipelineRun
     */
    select?: PipelineRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PipelineRun
     */
    omit?: PipelineRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PipelineRunInclude<ExtArgs> | null
    /**
     * Filter, which PipelineRun to fetch.
     */
    where?: PipelineRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PipelineRuns to fetch.
     */
    orderBy?: PipelineRunOrderByWithRelationInput | PipelineRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PipelineRuns.
     */
    cursor?: PipelineRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PipelineRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PipelineRuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PipelineRuns.
     */
    distinct?: PipelineRunScalarFieldEnum | PipelineRunScalarFieldEnum[]
  }

  /**
   * PipelineRun findMany
   */
  export type PipelineRunFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PipelineRun
     */
    select?: PipelineRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PipelineRun
     */
    omit?: PipelineRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PipelineRunInclude<ExtArgs> | null
    /**
     * Filter, which PipelineRuns to fetch.
     */
    where?: PipelineRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PipelineRuns to fetch.
     */
    orderBy?: PipelineRunOrderByWithRelationInput | PipelineRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PipelineRuns.
     */
    cursor?: PipelineRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PipelineRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PipelineRuns.
     */
    skip?: number
    distinct?: PipelineRunScalarFieldEnum | PipelineRunScalarFieldEnum[]
  }

  /**
   * PipelineRun create
   */
  export type PipelineRunCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PipelineRun
     */
    select?: PipelineRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PipelineRun
     */
    omit?: PipelineRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PipelineRunInclude<ExtArgs> | null
    /**
     * The data needed to create a PipelineRun.
     */
    data: XOR<PipelineRunCreateInput, PipelineRunUncheckedCreateInput>
  }

  /**
   * PipelineRun createMany
   */
  export type PipelineRunCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PipelineRuns.
     */
    data: PipelineRunCreateManyInput | PipelineRunCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PipelineRun createManyAndReturn
   */
  export type PipelineRunCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PipelineRun
     */
    select?: PipelineRunSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PipelineRun
     */
    omit?: PipelineRunOmit<ExtArgs> | null
    /**
     * The data used to create many PipelineRuns.
     */
    data: PipelineRunCreateManyInput | PipelineRunCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PipelineRun update
   */
  export type PipelineRunUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PipelineRun
     */
    select?: PipelineRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PipelineRun
     */
    omit?: PipelineRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PipelineRunInclude<ExtArgs> | null
    /**
     * The data needed to update a PipelineRun.
     */
    data: XOR<PipelineRunUpdateInput, PipelineRunUncheckedUpdateInput>
    /**
     * Choose, which PipelineRun to update.
     */
    where: PipelineRunWhereUniqueInput
  }

  /**
   * PipelineRun updateMany
   */
  export type PipelineRunUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PipelineRuns.
     */
    data: XOR<PipelineRunUpdateManyMutationInput, PipelineRunUncheckedUpdateManyInput>
    /**
     * Filter which PipelineRuns to update
     */
    where?: PipelineRunWhereInput
    /**
     * Limit how many PipelineRuns to update.
     */
    limit?: number
  }

  /**
   * PipelineRun updateManyAndReturn
   */
  export type PipelineRunUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PipelineRun
     */
    select?: PipelineRunSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PipelineRun
     */
    omit?: PipelineRunOmit<ExtArgs> | null
    /**
     * The data used to update PipelineRuns.
     */
    data: XOR<PipelineRunUpdateManyMutationInput, PipelineRunUncheckedUpdateManyInput>
    /**
     * Filter which PipelineRuns to update
     */
    where?: PipelineRunWhereInput
    /**
     * Limit how many PipelineRuns to update.
     */
    limit?: number
  }

  /**
   * PipelineRun upsert
   */
  export type PipelineRunUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PipelineRun
     */
    select?: PipelineRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PipelineRun
     */
    omit?: PipelineRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PipelineRunInclude<ExtArgs> | null
    /**
     * The filter to search for the PipelineRun to update in case it exists.
     */
    where: PipelineRunWhereUniqueInput
    /**
     * In case the PipelineRun found by the `where` argument doesn't exist, create a new PipelineRun with this data.
     */
    create: XOR<PipelineRunCreateInput, PipelineRunUncheckedCreateInput>
    /**
     * In case the PipelineRun was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PipelineRunUpdateInput, PipelineRunUncheckedUpdateInput>
  }

  /**
   * PipelineRun delete
   */
  export type PipelineRunDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PipelineRun
     */
    select?: PipelineRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PipelineRun
     */
    omit?: PipelineRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PipelineRunInclude<ExtArgs> | null
    /**
     * Filter which PipelineRun to delete.
     */
    where: PipelineRunWhereUniqueInput
  }

  /**
   * PipelineRun deleteMany
   */
  export type PipelineRunDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PipelineRuns to delete
     */
    where?: PipelineRunWhereInput
    /**
     * Limit how many PipelineRuns to delete.
     */
    limit?: number
  }

  /**
   * PipelineRun.activities
   */
  export type PipelineRun$activitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityRun
     */
    select?: ActivityRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityRun
     */
    omit?: ActivityRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityRunInclude<ExtArgs> | null
    where?: ActivityRunWhereInput
    orderBy?: ActivityRunOrderByWithRelationInput | ActivityRunOrderByWithRelationInput[]
    cursor?: ActivityRunWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActivityRunScalarFieldEnum | ActivityRunScalarFieldEnum[]
  }

  /**
   * PipelineRun without action
   */
  export type PipelineRunDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PipelineRun
     */
    select?: PipelineRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PipelineRun
     */
    omit?: PipelineRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PipelineRunInclude<ExtArgs> | null
  }


  /**
   * Model ActivityRun
   */

  export type AggregateActivityRun = {
    _count: ActivityRunCountAggregateOutputType | null
    _avg: ActivityRunAvgAggregateOutputType | null
    _sum: ActivityRunSumAggregateOutputType | null
    _min: ActivityRunMinAggregateOutputType | null
    _max: ActivityRunMaxAggregateOutputType | null
  }

  export type ActivityRunAvgAggregateOutputType = {
    duration: number | null
    dataProcessed: number | null
  }

  export type ActivityRunSumAggregateOutputType = {
    duration: number | null
    dataProcessed: number | null
  }

  export type ActivityRunMinAggregateOutputType = {
    id: string | null
    pipelineRunId: string | null
    name: string | null
    status: string | null
    duration: number | null
    dataProcessed: number | null
    errorMessage: string | null
  }

  export type ActivityRunMaxAggregateOutputType = {
    id: string | null
    pipelineRunId: string | null
    name: string | null
    status: string | null
    duration: number | null
    dataProcessed: number | null
    errorMessage: string | null
  }

  export type ActivityRunCountAggregateOutputType = {
    id: number
    pipelineRunId: number
    name: number
    status: number
    duration: number
    dataProcessed: number
    errorMessage: number
    _all: number
  }


  export type ActivityRunAvgAggregateInputType = {
    duration?: true
    dataProcessed?: true
  }

  export type ActivityRunSumAggregateInputType = {
    duration?: true
    dataProcessed?: true
  }

  export type ActivityRunMinAggregateInputType = {
    id?: true
    pipelineRunId?: true
    name?: true
    status?: true
    duration?: true
    dataProcessed?: true
    errorMessage?: true
  }

  export type ActivityRunMaxAggregateInputType = {
    id?: true
    pipelineRunId?: true
    name?: true
    status?: true
    duration?: true
    dataProcessed?: true
    errorMessage?: true
  }

  export type ActivityRunCountAggregateInputType = {
    id?: true
    pipelineRunId?: true
    name?: true
    status?: true
    duration?: true
    dataProcessed?: true
    errorMessage?: true
    _all?: true
  }

  export type ActivityRunAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActivityRun to aggregate.
     */
    where?: ActivityRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityRuns to fetch.
     */
    orderBy?: ActivityRunOrderByWithRelationInput | ActivityRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActivityRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityRuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ActivityRuns
    **/
    _count?: true | ActivityRunCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ActivityRunAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ActivityRunSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActivityRunMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActivityRunMaxAggregateInputType
  }

  export type GetActivityRunAggregateType<T extends ActivityRunAggregateArgs> = {
        [P in keyof T & keyof AggregateActivityRun]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActivityRun[P]>
      : GetScalarType<T[P], AggregateActivityRun[P]>
  }




  export type ActivityRunGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityRunWhereInput
    orderBy?: ActivityRunOrderByWithAggregationInput | ActivityRunOrderByWithAggregationInput[]
    by: ActivityRunScalarFieldEnum[] | ActivityRunScalarFieldEnum
    having?: ActivityRunScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActivityRunCountAggregateInputType | true
    _avg?: ActivityRunAvgAggregateInputType
    _sum?: ActivityRunSumAggregateInputType
    _min?: ActivityRunMinAggregateInputType
    _max?: ActivityRunMaxAggregateInputType
  }

  export type ActivityRunGroupByOutputType = {
    id: string
    pipelineRunId: string
    name: string
    status: string
    duration: number
    dataProcessed: number | null
    errorMessage: string | null
    _count: ActivityRunCountAggregateOutputType | null
    _avg: ActivityRunAvgAggregateOutputType | null
    _sum: ActivityRunSumAggregateOutputType | null
    _min: ActivityRunMinAggregateOutputType | null
    _max: ActivityRunMaxAggregateOutputType | null
  }

  type GetActivityRunGroupByPayload<T extends ActivityRunGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActivityRunGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActivityRunGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActivityRunGroupByOutputType[P]>
            : GetScalarType<T[P], ActivityRunGroupByOutputType[P]>
        }
      >
    >


  export type ActivityRunSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pipelineRunId?: boolean
    name?: boolean
    status?: boolean
    duration?: boolean
    dataProcessed?: boolean
    errorMessage?: boolean
    pipelineRun?: boolean | PipelineRunDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activityRun"]>

  export type ActivityRunSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pipelineRunId?: boolean
    name?: boolean
    status?: boolean
    duration?: boolean
    dataProcessed?: boolean
    errorMessage?: boolean
    pipelineRun?: boolean | PipelineRunDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activityRun"]>

  export type ActivityRunSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pipelineRunId?: boolean
    name?: boolean
    status?: boolean
    duration?: boolean
    dataProcessed?: boolean
    errorMessage?: boolean
    pipelineRun?: boolean | PipelineRunDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activityRun"]>

  export type ActivityRunSelectScalar = {
    id?: boolean
    pipelineRunId?: boolean
    name?: boolean
    status?: boolean
    duration?: boolean
    dataProcessed?: boolean
    errorMessage?: boolean
  }

  export type ActivityRunOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "pipelineRunId" | "name" | "status" | "duration" | "dataProcessed" | "errorMessage", ExtArgs["result"]["activityRun"]>
  export type ActivityRunInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pipelineRun?: boolean | PipelineRunDefaultArgs<ExtArgs>
  }
  export type ActivityRunIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pipelineRun?: boolean | PipelineRunDefaultArgs<ExtArgs>
  }
  export type ActivityRunIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pipelineRun?: boolean | PipelineRunDefaultArgs<ExtArgs>
  }

  export type $ActivityRunPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ActivityRun"
    objects: {
      pipelineRun: Prisma.$PipelineRunPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      pipelineRunId: string
      name: string
      status: string
      duration: number
      dataProcessed: number | null
      errorMessage: string | null
    }, ExtArgs["result"]["activityRun"]>
    composites: {}
  }

  type ActivityRunGetPayload<S extends boolean | null | undefined | ActivityRunDefaultArgs> = $Result.GetResult<Prisma.$ActivityRunPayload, S>

  type ActivityRunCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ActivityRunFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ActivityRunCountAggregateInputType | true
    }

  export interface ActivityRunDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ActivityRun'], meta: { name: 'ActivityRun' } }
    /**
     * Find zero or one ActivityRun that matches the filter.
     * @param {ActivityRunFindUniqueArgs} args - Arguments to find a ActivityRun
     * @example
     * // Get one ActivityRun
     * const activityRun = await prisma.activityRun.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ActivityRunFindUniqueArgs>(args: SelectSubset<T, ActivityRunFindUniqueArgs<ExtArgs>>): Prisma__ActivityRunClient<$Result.GetResult<Prisma.$ActivityRunPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ActivityRun that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ActivityRunFindUniqueOrThrowArgs} args - Arguments to find a ActivityRun
     * @example
     * // Get one ActivityRun
     * const activityRun = await prisma.activityRun.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ActivityRunFindUniqueOrThrowArgs>(args: SelectSubset<T, ActivityRunFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ActivityRunClient<$Result.GetResult<Prisma.$ActivityRunPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ActivityRun that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityRunFindFirstArgs} args - Arguments to find a ActivityRun
     * @example
     * // Get one ActivityRun
     * const activityRun = await prisma.activityRun.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ActivityRunFindFirstArgs>(args?: SelectSubset<T, ActivityRunFindFirstArgs<ExtArgs>>): Prisma__ActivityRunClient<$Result.GetResult<Prisma.$ActivityRunPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ActivityRun that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityRunFindFirstOrThrowArgs} args - Arguments to find a ActivityRun
     * @example
     * // Get one ActivityRun
     * const activityRun = await prisma.activityRun.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ActivityRunFindFirstOrThrowArgs>(args?: SelectSubset<T, ActivityRunFindFirstOrThrowArgs<ExtArgs>>): Prisma__ActivityRunClient<$Result.GetResult<Prisma.$ActivityRunPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ActivityRuns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityRunFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ActivityRuns
     * const activityRuns = await prisma.activityRun.findMany()
     * 
     * // Get first 10 ActivityRuns
     * const activityRuns = await prisma.activityRun.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const activityRunWithIdOnly = await prisma.activityRun.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ActivityRunFindManyArgs>(args?: SelectSubset<T, ActivityRunFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityRunPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ActivityRun.
     * @param {ActivityRunCreateArgs} args - Arguments to create a ActivityRun.
     * @example
     * // Create one ActivityRun
     * const ActivityRun = await prisma.activityRun.create({
     *   data: {
     *     // ... data to create a ActivityRun
     *   }
     * })
     * 
     */
    create<T extends ActivityRunCreateArgs>(args: SelectSubset<T, ActivityRunCreateArgs<ExtArgs>>): Prisma__ActivityRunClient<$Result.GetResult<Prisma.$ActivityRunPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ActivityRuns.
     * @param {ActivityRunCreateManyArgs} args - Arguments to create many ActivityRuns.
     * @example
     * // Create many ActivityRuns
     * const activityRun = await prisma.activityRun.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ActivityRunCreateManyArgs>(args?: SelectSubset<T, ActivityRunCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ActivityRuns and returns the data saved in the database.
     * @param {ActivityRunCreateManyAndReturnArgs} args - Arguments to create many ActivityRuns.
     * @example
     * // Create many ActivityRuns
     * const activityRun = await prisma.activityRun.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ActivityRuns and only return the `id`
     * const activityRunWithIdOnly = await prisma.activityRun.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ActivityRunCreateManyAndReturnArgs>(args?: SelectSubset<T, ActivityRunCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityRunPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ActivityRun.
     * @param {ActivityRunDeleteArgs} args - Arguments to delete one ActivityRun.
     * @example
     * // Delete one ActivityRun
     * const ActivityRun = await prisma.activityRun.delete({
     *   where: {
     *     // ... filter to delete one ActivityRun
     *   }
     * })
     * 
     */
    delete<T extends ActivityRunDeleteArgs>(args: SelectSubset<T, ActivityRunDeleteArgs<ExtArgs>>): Prisma__ActivityRunClient<$Result.GetResult<Prisma.$ActivityRunPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ActivityRun.
     * @param {ActivityRunUpdateArgs} args - Arguments to update one ActivityRun.
     * @example
     * // Update one ActivityRun
     * const activityRun = await prisma.activityRun.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ActivityRunUpdateArgs>(args: SelectSubset<T, ActivityRunUpdateArgs<ExtArgs>>): Prisma__ActivityRunClient<$Result.GetResult<Prisma.$ActivityRunPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ActivityRuns.
     * @param {ActivityRunDeleteManyArgs} args - Arguments to filter ActivityRuns to delete.
     * @example
     * // Delete a few ActivityRuns
     * const { count } = await prisma.activityRun.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ActivityRunDeleteManyArgs>(args?: SelectSubset<T, ActivityRunDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ActivityRuns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityRunUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ActivityRuns
     * const activityRun = await prisma.activityRun.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ActivityRunUpdateManyArgs>(args: SelectSubset<T, ActivityRunUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ActivityRuns and returns the data updated in the database.
     * @param {ActivityRunUpdateManyAndReturnArgs} args - Arguments to update many ActivityRuns.
     * @example
     * // Update many ActivityRuns
     * const activityRun = await prisma.activityRun.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ActivityRuns and only return the `id`
     * const activityRunWithIdOnly = await prisma.activityRun.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ActivityRunUpdateManyAndReturnArgs>(args: SelectSubset<T, ActivityRunUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityRunPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ActivityRun.
     * @param {ActivityRunUpsertArgs} args - Arguments to update or create a ActivityRun.
     * @example
     * // Update or create a ActivityRun
     * const activityRun = await prisma.activityRun.upsert({
     *   create: {
     *     // ... data to create a ActivityRun
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ActivityRun we want to update
     *   }
     * })
     */
    upsert<T extends ActivityRunUpsertArgs>(args: SelectSubset<T, ActivityRunUpsertArgs<ExtArgs>>): Prisma__ActivityRunClient<$Result.GetResult<Prisma.$ActivityRunPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ActivityRuns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityRunCountArgs} args - Arguments to filter ActivityRuns to count.
     * @example
     * // Count the number of ActivityRuns
     * const count = await prisma.activityRun.count({
     *   where: {
     *     // ... the filter for the ActivityRuns we want to count
     *   }
     * })
    **/
    count<T extends ActivityRunCountArgs>(
      args?: Subset<T, ActivityRunCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActivityRunCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ActivityRun.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityRunAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ActivityRunAggregateArgs>(args: Subset<T, ActivityRunAggregateArgs>): Prisma.PrismaPromise<GetActivityRunAggregateType<T>>

    /**
     * Group by ActivityRun.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityRunGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ActivityRunGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActivityRunGroupByArgs['orderBy'] }
        : { orderBy?: ActivityRunGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ActivityRunGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActivityRunGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ActivityRun model
   */
  readonly fields: ActivityRunFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ActivityRun.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActivityRunClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pipelineRun<T extends PipelineRunDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PipelineRunDefaultArgs<ExtArgs>>): Prisma__PipelineRunClient<$Result.GetResult<Prisma.$PipelineRunPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ActivityRun model
   */
  interface ActivityRunFieldRefs {
    readonly id: FieldRef<"ActivityRun", 'String'>
    readonly pipelineRunId: FieldRef<"ActivityRun", 'String'>
    readonly name: FieldRef<"ActivityRun", 'String'>
    readonly status: FieldRef<"ActivityRun", 'String'>
    readonly duration: FieldRef<"ActivityRun", 'Int'>
    readonly dataProcessed: FieldRef<"ActivityRun", 'Float'>
    readonly errorMessage: FieldRef<"ActivityRun", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ActivityRun findUnique
   */
  export type ActivityRunFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityRun
     */
    select?: ActivityRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityRun
     */
    omit?: ActivityRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityRunInclude<ExtArgs> | null
    /**
     * Filter, which ActivityRun to fetch.
     */
    where: ActivityRunWhereUniqueInput
  }

  /**
   * ActivityRun findUniqueOrThrow
   */
  export type ActivityRunFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityRun
     */
    select?: ActivityRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityRun
     */
    omit?: ActivityRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityRunInclude<ExtArgs> | null
    /**
     * Filter, which ActivityRun to fetch.
     */
    where: ActivityRunWhereUniqueInput
  }

  /**
   * ActivityRun findFirst
   */
  export type ActivityRunFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityRun
     */
    select?: ActivityRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityRun
     */
    omit?: ActivityRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityRunInclude<ExtArgs> | null
    /**
     * Filter, which ActivityRun to fetch.
     */
    where?: ActivityRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityRuns to fetch.
     */
    orderBy?: ActivityRunOrderByWithRelationInput | ActivityRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActivityRuns.
     */
    cursor?: ActivityRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityRuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActivityRuns.
     */
    distinct?: ActivityRunScalarFieldEnum | ActivityRunScalarFieldEnum[]
  }

  /**
   * ActivityRun findFirstOrThrow
   */
  export type ActivityRunFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityRun
     */
    select?: ActivityRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityRun
     */
    omit?: ActivityRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityRunInclude<ExtArgs> | null
    /**
     * Filter, which ActivityRun to fetch.
     */
    where?: ActivityRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityRuns to fetch.
     */
    orderBy?: ActivityRunOrderByWithRelationInput | ActivityRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActivityRuns.
     */
    cursor?: ActivityRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityRuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActivityRuns.
     */
    distinct?: ActivityRunScalarFieldEnum | ActivityRunScalarFieldEnum[]
  }

  /**
   * ActivityRun findMany
   */
  export type ActivityRunFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityRun
     */
    select?: ActivityRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityRun
     */
    omit?: ActivityRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityRunInclude<ExtArgs> | null
    /**
     * Filter, which ActivityRuns to fetch.
     */
    where?: ActivityRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityRuns to fetch.
     */
    orderBy?: ActivityRunOrderByWithRelationInput | ActivityRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ActivityRuns.
     */
    cursor?: ActivityRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityRuns.
     */
    skip?: number
    distinct?: ActivityRunScalarFieldEnum | ActivityRunScalarFieldEnum[]
  }

  /**
   * ActivityRun create
   */
  export type ActivityRunCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityRun
     */
    select?: ActivityRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityRun
     */
    omit?: ActivityRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityRunInclude<ExtArgs> | null
    /**
     * The data needed to create a ActivityRun.
     */
    data: XOR<ActivityRunCreateInput, ActivityRunUncheckedCreateInput>
  }

  /**
   * ActivityRun createMany
   */
  export type ActivityRunCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ActivityRuns.
     */
    data: ActivityRunCreateManyInput | ActivityRunCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ActivityRun createManyAndReturn
   */
  export type ActivityRunCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityRun
     */
    select?: ActivityRunSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityRun
     */
    omit?: ActivityRunOmit<ExtArgs> | null
    /**
     * The data used to create many ActivityRuns.
     */
    data: ActivityRunCreateManyInput | ActivityRunCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityRunIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ActivityRun update
   */
  export type ActivityRunUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityRun
     */
    select?: ActivityRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityRun
     */
    omit?: ActivityRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityRunInclude<ExtArgs> | null
    /**
     * The data needed to update a ActivityRun.
     */
    data: XOR<ActivityRunUpdateInput, ActivityRunUncheckedUpdateInput>
    /**
     * Choose, which ActivityRun to update.
     */
    where: ActivityRunWhereUniqueInput
  }

  /**
   * ActivityRun updateMany
   */
  export type ActivityRunUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ActivityRuns.
     */
    data: XOR<ActivityRunUpdateManyMutationInput, ActivityRunUncheckedUpdateManyInput>
    /**
     * Filter which ActivityRuns to update
     */
    where?: ActivityRunWhereInput
    /**
     * Limit how many ActivityRuns to update.
     */
    limit?: number
  }

  /**
   * ActivityRun updateManyAndReturn
   */
  export type ActivityRunUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityRun
     */
    select?: ActivityRunSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityRun
     */
    omit?: ActivityRunOmit<ExtArgs> | null
    /**
     * The data used to update ActivityRuns.
     */
    data: XOR<ActivityRunUpdateManyMutationInput, ActivityRunUncheckedUpdateManyInput>
    /**
     * Filter which ActivityRuns to update
     */
    where?: ActivityRunWhereInput
    /**
     * Limit how many ActivityRuns to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityRunIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ActivityRun upsert
   */
  export type ActivityRunUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityRun
     */
    select?: ActivityRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityRun
     */
    omit?: ActivityRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityRunInclude<ExtArgs> | null
    /**
     * The filter to search for the ActivityRun to update in case it exists.
     */
    where: ActivityRunWhereUniqueInput
    /**
     * In case the ActivityRun found by the `where` argument doesn't exist, create a new ActivityRun with this data.
     */
    create: XOR<ActivityRunCreateInput, ActivityRunUncheckedCreateInput>
    /**
     * In case the ActivityRun was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActivityRunUpdateInput, ActivityRunUncheckedUpdateInput>
  }

  /**
   * ActivityRun delete
   */
  export type ActivityRunDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityRun
     */
    select?: ActivityRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityRun
     */
    omit?: ActivityRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityRunInclude<ExtArgs> | null
    /**
     * Filter which ActivityRun to delete.
     */
    where: ActivityRunWhereUniqueInput
  }

  /**
   * ActivityRun deleteMany
   */
  export type ActivityRunDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActivityRuns to delete
     */
    where?: ActivityRunWhereInput
    /**
     * Limit how many ActivityRuns to delete.
     */
    limit?: number
  }

  /**
   * ActivityRun without action
   */
  export type ActivityRunDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityRun
     */
    select?: ActivityRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityRun
     */
    omit?: ActivityRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityRunInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const PipelineRunScalarFieldEnum: {
    id: 'id',
    pipelineName: 'pipelineName',
    runStatus: 'runStatus',
    startTime: 'startTime',
    endTime: 'endTime',
    duration: 'duration',
    triggerType: 'triggerType',
    parameters: 'parameters',
    dataVolume: 'dataVolume',
    failureReason: 'failureReason',
    createdAt: 'createdAt'
  };

  export type PipelineRunScalarFieldEnum = (typeof PipelineRunScalarFieldEnum)[keyof typeof PipelineRunScalarFieldEnum]


  export const ActivityRunScalarFieldEnum: {
    id: 'id',
    pipelineRunId: 'pipelineRunId',
    name: 'name',
    status: 'status',
    duration: 'duration',
    dataProcessed: 'dataProcessed',
    errorMessage: 'errorMessage'
  };

  export type ActivityRunScalarFieldEnum = (typeof ActivityRunScalarFieldEnum)[keyof typeof ActivityRunScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type PipelineRunWhereInput = {
    AND?: PipelineRunWhereInput | PipelineRunWhereInput[]
    OR?: PipelineRunWhereInput[]
    NOT?: PipelineRunWhereInput | PipelineRunWhereInput[]
    id?: StringFilter<"PipelineRun"> | string
    pipelineName?: StringFilter<"PipelineRun"> | string
    runStatus?: StringFilter<"PipelineRun"> | string
    startTime?: DateTimeFilter<"PipelineRun"> | Date | string
    endTime?: DateTimeFilter<"PipelineRun"> | Date | string
    duration?: IntFilter<"PipelineRun"> | number
    triggerType?: StringFilter<"PipelineRun"> | string
    parameters?: JsonFilter<"PipelineRun">
    dataVolume?: FloatNullableFilter<"PipelineRun"> | number | null
    failureReason?: StringNullableFilter<"PipelineRun"> | string | null
    createdAt?: DateTimeFilter<"PipelineRun"> | Date | string
    activities?: ActivityRunListRelationFilter
  }

  export type PipelineRunOrderByWithRelationInput = {
    id?: SortOrder
    pipelineName?: SortOrder
    runStatus?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    duration?: SortOrder
    triggerType?: SortOrder
    parameters?: SortOrder
    dataVolume?: SortOrderInput | SortOrder
    failureReason?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    activities?: ActivityRunOrderByRelationAggregateInput
  }

  export type PipelineRunWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PipelineRunWhereInput | PipelineRunWhereInput[]
    OR?: PipelineRunWhereInput[]
    NOT?: PipelineRunWhereInput | PipelineRunWhereInput[]
    pipelineName?: StringFilter<"PipelineRun"> | string
    runStatus?: StringFilter<"PipelineRun"> | string
    startTime?: DateTimeFilter<"PipelineRun"> | Date | string
    endTime?: DateTimeFilter<"PipelineRun"> | Date | string
    duration?: IntFilter<"PipelineRun"> | number
    triggerType?: StringFilter<"PipelineRun"> | string
    parameters?: JsonFilter<"PipelineRun">
    dataVolume?: FloatNullableFilter<"PipelineRun"> | number | null
    failureReason?: StringNullableFilter<"PipelineRun"> | string | null
    createdAt?: DateTimeFilter<"PipelineRun"> | Date | string
    activities?: ActivityRunListRelationFilter
  }, "id">

  export type PipelineRunOrderByWithAggregationInput = {
    id?: SortOrder
    pipelineName?: SortOrder
    runStatus?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    duration?: SortOrder
    triggerType?: SortOrder
    parameters?: SortOrder
    dataVolume?: SortOrderInput | SortOrder
    failureReason?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: PipelineRunCountOrderByAggregateInput
    _avg?: PipelineRunAvgOrderByAggregateInput
    _max?: PipelineRunMaxOrderByAggregateInput
    _min?: PipelineRunMinOrderByAggregateInput
    _sum?: PipelineRunSumOrderByAggregateInput
  }

  export type PipelineRunScalarWhereWithAggregatesInput = {
    AND?: PipelineRunScalarWhereWithAggregatesInput | PipelineRunScalarWhereWithAggregatesInput[]
    OR?: PipelineRunScalarWhereWithAggregatesInput[]
    NOT?: PipelineRunScalarWhereWithAggregatesInput | PipelineRunScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PipelineRun"> | string
    pipelineName?: StringWithAggregatesFilter<"PipelineRun"> | string
    runStatus?: StringWithAggregatesFilter<"PipelineRun"> | string
    startTime?: DateTimeWithAggregatesFilter<"PipelineRun"> | Date | string
    endTime?: DateTimeWithAggregatesFilter<"PipelineRun"> | Date | string
    duration?: IntWithAggregatesFilter<"PipelineRun"> | number
    triggerType?: StringWithAggregatesFilter<"PipelineRun"> | string
    parameters?: JsonWithAggregatesFilter<"PipelineRun">
    dataVolume?: FloatNullableWithAggregatesFilter<"PipelineRun"> | number | null
    failureReason?: StringNullableWithAggregatesFilter<"PipelineRun"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"PipelineRun"> | Date | string
  }

  export type ActivityRunWhereInput = {
    AND?: ActivityRunWhereInput | ActivityRunWhereInput[]
    OR?: ActivityRunWhereInput[]
    NOT?: ActivityRunWhereInput | ActivityRunWhereInput[]
    id?: StringFilter<"ActivityRun"> | string
    pipelineRunId?: StringFilter<"ActivityRun"> | string
    name?: StringFilter<"ActivityRun"> | string
    status?: StringFilter<"ActivityRun"> | string
    duration?: IntFilter<"ActivityRun"> | number
    dataProcessed?: FloatNullableFilter<"ActivityRun"> | number | null
    errorMessage?: StringNullableFilter<"ActivityRun"> | string | null
    pipelineRun?: XOR<PipelineRunScalarRelationFilter, PipelineRunWhereInput>
  }

  export type ActivityRunOrderByWithRelationInput = {
    id?: SortOrder
    pipelineRunId?: SortOrder
    name?: SortOrder
    status?: SortOrder
    duration?: SortOrder
    dataProcessed?: SortOrderInput | SortOrder
    errorMessage?: SortOrderInput | SortOrder
    pipelineRun?: PipelineRunOrderByWithRelationInput
  }

  export type ActivityRunWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ActivityRunWhereInput | ActivityRunWhereInput[]
    OR?: ActivityRunWhereInput[]
    NOT?: ActivityRunWhereInput | ActivityRunWhereInput[]
    pipelineRunId?: StringFilter<"ActivityRun"> | string
    name?: StringFilter<"ActivityRun"> | string
    status?: StringFilter<"ActivityRun"> | string
    duration?: IntFilter<"ActivityRun"> | number
    dataProcessed?: FloatNullableFilter<"ActivityRun"> | number | null
    errorMessage?: StringNullableFilter<"ActivityRun"> | string | null
    pipelineRun?: XOR<PipelineRunScalarRelationFilter, PipelineRunWhereInput>
  }, "id">

  export type ActivityRunOrderByWithAggregationInput = {
    id?: SortOrder
    pipelineRunId?: SortOrder
    name?: SortOrder
    status?: SortOrder
    duration?: SortOrder
    dataProcessed?: SortOrderInput | SortOrder
    errorMessage?: SortOrderInput | SortOrder
    _count?: ActivityRunCountOrderByAggregateInput
    _avg?: ActivityRunAvgOrderByAggregateInput
    _max?: ActivityRunMaxOrderByAggregateInput
    _min?: ActivityRunMinOrderByAggregateInput
    _sum?: ActivityRunSumOrderByAggregateInput
  }

  export type ActivityRunScalarWhereWithAggregatesInput = {
    AND?: ActivityRunScalarWhereWithAggregatesInput | ActivityRunScalarWhereWithAggregatesInput[]
    OR?: ActivityRunScalarWhereWithAggregatesInput[]
    NOT?: ActivityRunScalarWhereWithAggregatesInput | ActivityRunScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ActivityRun"> | string
    pipelineRunId?: StringWithAggregatesFilter<"ActivityRun"> | string
    name?: StringWithAggregatesFilter<"ActivityRun"> | string
    status?: StringWithAggregatesFilter<"ActivityRun"> | string
    duration?: IntWithAggregatesFilter<"ActivityRun"> | number
    dataProcessed?: FloatNullableWithAggregatesFilter<"ActivityRun"> | number | null
    errorMessage?: StringNullableWithAggregatesFilter<"ActivityRun"> | string | null
  }

  export type PipelineRunCreateInput = {
    id?: string
    pipelineName: string
    runStatus: string
    startTime: Date | string
    endTime: Date | string
    duration: number
    triggerType: string
    parameters: JsonNullValueInput | InputJsonValue
    dataVolume?: number | null
    failureReason?: string | null
    createdAt?: Date | string
    activities?: ActivityRunCreateNestedManyWithoutPipelineRunInput
  }

  export type PipelineRunUncheckedCreateInput = {
    id?: string
    pipelineName: string
    runStatus: string
    startTime: Date | string
    endTime: Date | string
    duration: number
    triggerType: string
    parameters: JsonNullValueInput | InputJsonValue
    dataVolume?: number | null
    failureReason?: string | null
    createdAt?: Date | string
    activities?: ActivityRunUncheckedCreateNestedManyWithoutPipelineRunInput
  }

  export type PipelineRunUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pipelineName?: StringFieldUpdateOperationsInput | string
    runStatus?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    triggerType?: StringFieldUpdateOperationsInput | string
    parameters?: JsonNullValueInput | InputJsonValue
    dataVolume?: NullableFloatFieldUpdateOperationsInput | number | null
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activities?: ActivityRunUpdateManyWithoutPipelineRunNestedInput
  }

  export type PipelineRunUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pipelineName?: StringFieldUpdateOperationsInput | string
    runStatus?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    triggerType?: StringFieldUpdateOperationsInput | string
    parameters?: JsonNullValueInput | InputJsonValue
    dataVolume?: NullableFloatFieldUpdateOperationsInput | number | null
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activities?: ActivityRunUncheckedUpdateManyWithoutPipelineRunNestedInput
  }

  export type PipelineRunCreateManyInput = {
    id?: string
    pipelineName: string
    runStatus: string
    startTime: Date | string
    endTime: Date | string
    duration: number
    triggerType: string
    parameters: JsonNullValueInput | InputJsonValue
    dataVolume?: number | null
    failureReason?: string | null
    createdAt?: Date | string
  }

  export type PipelineRunUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    pipelineName?: StringFieldUpdateOperationsInput | string
    runStatus?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    triggerType?: StringFieldUpdateOperationsInput | string
    parameters?: JsonNullValueInput | InputJsonValue
    dataVolume?: NullableFloatFieldUpdateOperationsInput | number | null
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PipelineRunUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    pipelineName?: StringFieldUpdateOperationsInput | string
    runStatus?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    triggerType?: StringFieldUpdateOperationsInput | string
    parameters?: JsonNullValueInput | InputJsonValue
    dataVolume?: NullableFloatFieldUpdateOperationsInput | number | null
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityRunCreateInput = {
    id?: string
    name: string
    status: string
    duration: number
    dataProcessed?: number | null
    errorMessage?: string | null
    pipelineRun: PipelineRunCreateNestedOneWithoutActivitiesInput
  }

  export type ActivityRunUncheckedCreateInput = {
    id?: string
    pipelineRunId: string
    name: string
    status: string
    duration: number
    dataProcessed?: number | null
    errorMessage?: string | null
  }

  export type ActivityRunUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    dataProcessed?: NullableFloatFieldUpdateOperationsInput | number | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    pipelineRun?: PipelineRunUpdateOneRequiredWithoutActivitiesNestedInput
  }

  export type ActivityRunUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pipelineRunId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    dataProcessed?: NullableFloatFieldUpdateOperationsInput | number | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ActivityRunCreateManyInput = {
    id?: string
    pipelineRunId: string
    name: string
    status: string
    duration: number
    dataProcessed?: number | null
    errorMessage?: string | null
  }

  export type ActivityRunUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    dataProcessed?: NullableFloatFieldUpdateOperationsInput | number | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ActivityRunUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    pipelineRunId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    dataProcessed?: NullableFloatFieldUpdateOperationsInput | number | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type ActivityRunListRelationFilter = {
    every?: ActivityRunWhereInput
    some?: ActivityRunWhereInput
    none?: ActivityRunWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ActivityRunOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PipelineRunCountOrderByAggregateInput = {
    id?: SortOrder
    pipelineName?: SortOrder
    runStatus?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    duration?: SortOrder
    triggerType?: SortOrder
    parameters?: SortOrder
    dataVolume?: SortOrder
    failureReason?: SortOrder
    createdAt?: SortOrder
  }

  export type PipelineRunAvgOrderByAggregateInput = {
    duration?: SortOrder
    dataVolume?: SortOrder
  }

  export type PipelineRunMaxOrderByAggregateInput = {
    id?: SortOrder
    pipelineName?: SortOrder
    runStatus?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    duration?: SortOrder
    triggerType?: SortOrder
    dataVolume?: SortOrder
    failureReason?: SortOrder
    createdAt?: SortOrder
  }

  export type PipelineRunMinOrderByAggregateInput = {
    id?: SortOrder
    pipelineName?: SortOrder
    runStatus?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    duration?: SortOrder
    triggerType?: SortOrder
    dataVolume?: SortOrder
    failureReason?: SortOrder
    createdAt?: SortOrder
  }

  export type PipelineRunSumOrderByAggregateInput = {
    duration?: SortOrder
    dataVolume?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type PipelineRunScalarRelationFilter = {
    is?: PipelineRunWhereInput
    isNot?: PipelineRunWhereInput
  }

  export type ActivityRunCountOrderByAggregateInput = {
    id?: SortOrder
    pipelineRunId?: SortOrder
    name?: SortOrder
    status?: SortOrder
    duration?: SortOrder
    dataProcessed?: SortOrder
    errorMessage?: SortOrder
  }

  export type ActivityRunAvgOrderByAggregateInput = {
    duration?: SortOrder
    dataProcessed?: SortOrder
  }

  export type ActivityRunMaxOrderByAggregateInput = {
    id?: SortOrder
    pipelineRunId?: SortOrder
    name?: SortOrder
    status?: SortOrder
    duration?: SortOrder
    dataProcessed?: SortOrder
    errorMessage?: SortOrder
  }

  export type ActivityRunMinOrderByAggregateInput = {
    id?: SortOrder
    pipelineRunId?: SortOrder
    name?: SortOrder
    status?: SortOrder
    duration?: SortOrder
    dataProcessed?: SortOrder
    errorMessage?: SortOrder
  }

  export type ActivityRunSumOrderByAggregateInput = {
    duration?: SortOrder
    dataProcessed?: SortOrder
  }

  export type ActivityRunCreateNestedManyWithoutPipelineRunInput = {
    create?: XOR<ActivityRunCreateWithoutPipelineRunInput, ActivityRunUncheckedCreateWithoutPipelineRunInput> | ActivityRunCreateWithoutPipelineRunInput[] | ActivityRunUncheckedCreateWithoutPipelineRunInput[]
    connectOrCreate?: ActivityRunCreateOrConnectWithoutPipelineRunInput | ActivityRunCreateOrConnectWithoutPipelineRunInput[]
    createMany?: ActivityRunCreateManyPipelineRunInputEnvelope
    connect?: ActivityRunWhereUniqueInput | ActivityRunWhereUniqueInput[]
  }

  export type ActivityRunUncheckedCreateNestedManyWithoutPipelineRunInput = {
    create?: XOR<ActivityRunCreateWithoutPipelineRunInput, ActivityRunUncheckedCreateWithoutPipelineRunInput> | ActivityRunCreateWithoutPipelineRunInput[] | ActivityRunUncheckedCreateWithoutPipelineRunInput[]
    connectOrCreate?: ActivityRunCreateOrConnectWithoutPipelineRunInput | ActivityRunCreateOrConnectWithoutPipelineRunInput[]
    createMany?: ActivityRunCreateManyPipelineRunInputEnvelope
    connect?: ActivityRunWhereUniqueInput | ActivityRunWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ActivityRunUpdateManyWithoutPipelineRunNestedInput = {
    create?: XOR<ActivityRunCreateWithoutPipelineRunInput, ActivityRunUncheckedCreateWithoutPipelineRunInput> | ActivityRunCreateWithoutPipelineRunInput[] | ActivityRunUncheckedCreateWithoutPipelineRunInput[]
    connectOrCreate?: ActivityRunCreateOrConnectWithoutPipelineRunInput | ActivityRunCreateOrConnectWithoutPipelineRunInput[]
    upsert?: ActivityRunUpsertWithWhereUniqueWithoutPipelineRunInput | ActivityRunUpsertWithWhereUniqueWithoutPipelineRunInput[]
    createMany?: ActivityRunCreateManyPipelineRunInputEnvelope
    set?: ActivityRunWhereUniqueInput | ActivityRunWhereUniqueInput[]
    disconnect?: ActivityRunWhereUniqueInput | ActivityRunWhereUniqueInput[]
    delete?: ActivityRunWhereUniqueInput | ActivityRunWhereUniqueInput[]
    connect?: ActivityRunWhereUniqueInput | ActivityRunWhereUniqueInput[]
    update?: ActivityRunUpdateWithWhereUniqueWithoutPipelineRunInput | ActivityRunUpdateWithWhereUniqueWithoutPipelineRunInput[]
    updateMany?: ActivityRunUpdateManyWithWhereWithoutPipelineRunInput | ActivityRunUpdateManyWithWhereWithoutPipelineRunInput[]
    deleteMany?: ActivityRunScalarWhereInput | ActivityRunScalarWhereInput[]
  }

  export type ActivityRunUncheckedUpdateManyWithoutPipelineRunNestedInput = {
    create?: XOR<ActivityRunCreateWithoutPipelineRunInput, ActivityRunUncheckedCreateWithoutPipelineRunInput> | ActivityRunCreateWithoutPipelineRunInput[] | ActivityRunUncheckedCreateWithoutPipelineRunInput[]
    connectOrCreate?: ActivityRunCreateOrConnectWithoutPipelineRunInput | ActivityRunCreateOrConnectWithoutPipelineRunInput[]
    upsert?: ActivityRunUpsertWithWhereUniqueWithoutPipelineRunInput | ActivityRunUpsertWithWhereUniqueWithoutPipelineRunInput[]
    createMany?: ActivityRunCreateManyPipelineRunInputEnvelope
    set?: ActivityRunWhereUniqueInput | ActivityRunWhereUniqueInput[]
    disconnect?: ActivityRunWhereUniqueInput | ActivityRunWhereUniqueInput[]
    delete?: ActivityRunWhereUniqueInput | ActivityRunWhereUniqueInput[]
    connect?: ActivityRunWhereUniqueInput | ActivityRunWhereUniqueInput[]
    update?: ActivityRunUpdateWithWhereUniqueWithoutPipelineRunInput | ActivityRunUpdateWithWhereUniqueWithoutPipelineRunInput[]
    updateMany?: ActivityRunUpdateManyWithWhereWithoutPipelineRunInput | ActivityRunUpdateManyWithWhereWithoutPipelineRunInput[]
    deleteMany?: ActivityRunScalarWhereInput | ActivityRunScalarWhereInput[]
  }

  export type PipelineRunCreateNestedOneWithoutActivitiesInput = {
    create?: XOR<PipelineRunCreateWithoutActivitiesInput, PipelineRunUncheckedCreateWithoutActivitiesInput>
    connectOrCreate?: PipelineRunCreateOrConnectWithoutActivitiesInput
    connect?: PipelineRunWhereUniqueInput
  }

  export type PipelineRunUpdateOneRequiredWithoutActivitiesNestedInput = {
    create?: XOR<PipelineRunCreateWithoutActivitiesInput, PipelineRunUncheckedCreateWithoutActivitiesInput>
    connectOrCreate?: PipelineRunCreateOrConnectWithoutActivitiesInput
    upsert?: PipelineRunUpsertWithoutActivitiesInput
    connect?: PipelineRunWhereUniqueInput
    update?: XOR<XOR<PipelineRunUpdateToOneWithWhereWithoutActivitiesInput, PipelineRunUpdateWithoutActivitiesInput>, PipelineRunUncheckedUpdateWithoutActivitiesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type ActivityRunCreateWithoutPipelineRunInput = {
    id?: string
    name: string
    status: string
    duration: number
    dataProcessed?: number | null
    errorMessage?: string | null
  }

  export type ActivityRunUncheckedCreateWithoutPipelineRunInput = {
    id?: string
    name: string
    status: string
    duration: number
    dataProcessed?: number | null
    errorMessage?: string | null
  }

  export type ActivityRunCreateOrConnectWithoutPipelineRunInput = {
    where: ActivityRunWhereUniqueInput
    create: XOR<ActivityRunCreateWithoutPipelineRunInput, ActivityRunUncheckedCreateWithoutPipelineRunInput>
  }

  export type ActivityRunCreateManyPipelineRunInputEnvelope = {
    data: ActivityRunCreateManyPipelineRunInput | ActivityRunCreateManyPipelineRunInput[]
    skipDuplicates?: boolean
  }

  export type ActivityRunUpsertWithWhereUniqueWithoutPipelineRunInput = {
    where: ActivityRunWhereUniqueInput
    update: XOR<ActivityRunUpdateWithoutPipelineRunInput, ActivityRunUncheckedUpdateWithoutPipelineRunInput>
    create: XOR<ActivityRunCreateWithoutPipelineRunInput, ActivityRunUncheckedCreateWithoutPipelineRunInput>
  }

  export type ActivityRunUpdateWithWhereUniqueWithoutPipelineRunInput = {
    where: ActivityRunWhereUniqueInput
    data: XOR<ActivityRunUpdateWithoutPipelineRunInput, ActivityRunUncheckedUpdateWithoutPipelineRunInput>
  }

  export type ActivityRunUpdateManyWithWhereWithoutPipelineRunInput = {
    where: ActivityRunScalarWhereInput
    data: XOR<ActivityRunUpdateManyMutationInput, ActivityRunUncheckedUpdateManyWithoutPipelineRunInput>
  }

  export type ActivityRunScalarWhereInput = {
    AND?: ActivityRunScalarWhereInput | ActivityRunScalarWhereInput[]
    OR?: ActivityRunScalarWhereInput[]
    NOT?: ActivityRunScalarWhereInput | ActivityRunScalarWhereInput[]
    id?: StringFilter<"ActivityRun"> | string
    pipelineRunId?: StringFilter<"ActivityRun"> | string
    name?: StringFilter<"ActivityRun"> | string
    status?: StringFilter<"ActivityRun"> | string
    duration?: IntFilter<"ActivityRun"> | number
    dataProcessed?: FloatNullableFilter<"ActivityRun"> | number | null
    errorMessage?: StringNullableFilter<"ActivityRun"> | string | null
  }

  export type PipelineRunCreateWithoutActivitiesInput = {
    id?: string
    pipelineName: string
    runStatus: string
    startTime: Date | string
    endTime: Date | string
    duration: number
    triggerType: string
    parameters: JsonNullValueInput | InputJsonValue
    dataVolume?: number | null
    failureReason?: string | null
    createdAt?: Date | string
  }

  export type PipelineRunUncheckedCreateWithoutActivitiesInput = {
    id?: string
    pipelineName: string
    runStatus: string
    startTime: Date | string
    endTime: Date | string
    duration: number
    triggerType: string
    parameters: JsonNullValueInput | InputJsonValue
    dataVolume?: number | null
    failureReason?: string | null
    createdAt?: Date | string
  }

  export type PipelineRunCreateOrConnectWithoutActivitiesInput = {
    where: PipelineRunWhereUniqueInput
    create: XOR<PipelineRunCreateWithoutActivitiesInput, PipelineRunUncheckedCreateWithoutActivitiesInput>
  }

  export type PipelineRunUpsertWithoutActivitiesInput = {
    update: XOR<PipelineRunUpdateWithoutActivitiesInput, PipelineRunUncheckedUpdateWithoutActivitiesInput>
    create: XOR<PipelineRunCreateWithoutActivitiesInput, PipelineRunUncheckedCreateWithoutActivitiesInput>
    where?: PipelineRunWhereInput
  }

  export type PipelineRunUpdateToOneWithWhereWithoutActivitiesInput = {
    where?: PipelineRunWhereInput
    data: XOR<PipelineRunUpdateWithoutActivitiesInput, PipelineRunUncheckedUpdateWithoutActivitiesInput>
  }

  export type PipelineRunUpdateWithoutActivitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    pipelineName?: StringFieldUpdateOperationsInput | string
    runStatus?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    triggerType?: StringFieldUpdateOperationsInput | string
    parameters?: JsonNullValueInput | InputJsonValue
    dataVolume?: NullableFloatFieldUpdateOperationsInput | number | null
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PipelineRunUncheckedUpdateWithoutActivitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    pipelineName?: StringFieldUpdateOperationsInput | string
    runStatus?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    triggerType?: StringFieldUpdateOperationsInput | string
    parameters?: JsonNullValueInput | InputJsonValue
    dataVolume?: NullableFloatFieldUpdateOperationsInput | number | null
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityRunCreateManyPipelineRunInput = {
    id?: string
    name: string
    status: string
    duration: number
    dataProcessed?: number | null
    errorMessage?: string | null
  }

  export type ActivityRunUpdateWithoutPipelineRunInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    dataProcessed?: NullableFloatFieldUpdateOperationsInput | number | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ActivityRunUncheckedUpdateWithoutPipelineRunInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    dataProcessed?: NullableFloatFieldUpdateOperationsInput | number | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ActivityRunUncheckedUpdateManyWithoutPipelineRunInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    dataProcessed?: NullableFloatFieldUpdateOperationsInput | number | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}