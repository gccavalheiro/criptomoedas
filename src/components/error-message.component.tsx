import { cn } from '@/utils/cn';
import { AlertCircle } from 'lucide-react';

type ErrorMessageRootProps = React.HTMLAttributes<HTMLDivElement>;

function ErrorMessageRoot(props: ErrorMessageRootProps) {
  const { className, ...rest } = props;

  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center p-8 text-center',
        className
      )}
      {...rest}
    />
  );
}

type ErrorMessageIconProps = React.HTMLAttributes<HTMLDivElement>;

function ErrorMessageIcon(props: ErrorMessageIconProps) {
  const { className, ...rest } = props;

  return (
    <div className={cn('w-12 h-12 text-destructive mb-4', className)} {...rest}>
      <AlertCircle className="w-full h-full" />
    </div>
  );
}

type ErrorMessageTitleProps = React.HTMLAttributes<HTMLHeadingElement>;

function ErrorMessageTitle(props: ErrorMessageTitleProps) {
  const { className, ...rest } = props;

  return (
    <h3
      className={cn('text-lg font-semibold text-foreground mb-2', className)}
      {...rest}
    />
  );
}

type ErrorMessageDescriptionProps = React.HTMLAttributes<HTMLParagraphElement>;

function ErrorMessageDescription(props: ErrorMessageDescriptionProps) {
  const { className, ...rest } = props;

  return (
    <p
      className={cn('text-muted-foreground mb-6 max-w-md', className)}
      {...rest}
    />
  );
}

type ErrorMessageButtonProps = React.HTMLAttributes<HTMLButtonElement>;

function ErrorMessageButton(props: ErrorMessageButtonProps) {
  const { className, ...rest } = props;

  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 gap-2',
        className
      )}
      {...rest}
    />
  );
}

export const ErrorMessage = {
  Root: ErrorMessageRoot,
  Icon: ErrorMessageIcon,
  Title: ErrorMessageTitle,
  Description: ErrorMessageDescription,
  Button: ErrorMessageButton,
};
