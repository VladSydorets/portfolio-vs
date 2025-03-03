import React from "react";
import { FieldError } from "react-hook-form";

interface ErrorProps {
  errorName: FieldError | undefined;
}

export default function Error({ errorName }: ErrorProps) {
  return (
    <div className="h-6">
      {errorName?.message && (
        <span className="text-red-500 text-sm">{errorName.message}</span>
      )}
    </div>
  );
}
