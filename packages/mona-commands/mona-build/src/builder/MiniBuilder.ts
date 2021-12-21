
import BaseBuilder from '@/builder/BaseBuilder';
import compilerCallback from '@/utils/compilerCallback';
import chalk from 'chalk';

class MiniBuilder extends BaseBuilder {

  build() {
    console.log(chalk.cyan('开始打包'))
    this.compiler.run(compilerCallback(true));
  }
  
  start() {
    console.log(chalk.cyan('开始打包'))
    this.compiler.watch({
       aggregateTimeout: 200,
    }, (error: any, stats: any) => {
      if (error) {
        throw error;
      }

      const info = stats?.toJson();
      if (stats?.hasErrors()) {
        info?.errors?.forEach((err: Error) => {
          console.log(chalk.red(err.message));
        });
        process.exit(1);
      }
      if (stats?.hasWarnings()) {
        info?.warnings?.forEach((w: Error) => {
          console.log(chalk.yellow(w.message));
        });
      }
      console.log('文件监听中...');
    });
  }
}

export default MiniBuilder;