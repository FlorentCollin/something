import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import {PythonFunction} from '@aws-cdk/aws-lambda-python-alpha';
import { Runtime } from 'aws-cdk-lib/aws-lambda';

export class GithubStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    new PythonFunction(this, 'Something', {
        entry: './lib',
        runtime: Runtime.PYTHON_3_9,
    })
  }
}
